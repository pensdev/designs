import assert from "node:assert/strict";
import test from "node:test";
import { cached, clearCivicCache } from "./cache.server.ts";
import { CivicFetchError } from "./http.server.ts";

const prov = (t: string) => ({
  source: "S", api: "a", retrievedAt: t, retrievedDisplay: t, url: undefined,
});

test("a second call inside the TTL reuses the payload and its original stamp", async () => {
  clearCivicCache();
  let calls = 0;
  const load = async () => { calls++; return { data: { n: calls }, provenance: prov(`t${calls}`) }; };

  const a = await cached("k", 60_000, load);
  const b = await cached("k", 60_000, load);

  assert.equal(calls, 1, "loader ran twice");
  assert.deepEqual(a.ok && a.data, { n: 1 });
  assert.deepEqual(b.ok && b.data, { n: 1 });
  assert.equal(b.ok && b.provenance.retrievedAt, "t1", "stamp moved on a cache hit");
  assert.equal(b.ok && b.stale, false);
});

test("an expired entry refreshes", async () => {
  clearCivicCache();
  let calls = 0;
  const load = async () => { calls++; return { data: { n: calls }, provenance: prov(`t${calls}`) }; };

  await cached("k", 0, load);
  const b = await cached("k", 0, load);
  assert.equal(calls, 2);
  assert.equal(b.ok && b.provenance.retrievedAt, "t2");
});

test("a failure after expiry serves the last good payload, marked stale, with its ORIGINAL stamp", async () => {
  clearCivicCache();
  let calls = 0;
  const load = async () => {
    calls++;
    if (calls === 1) return { data: { n: 1 }, provenance: prov("t1") };
    throw new CivicFetchError({ kind: "rate_limited", message: "throttled" });
  };

  await cached("k", 0, load);
  const b = await cached("k", 0, load);

  assert.equal(b.ok, true, "should degrade, not error");
  assert.deepEqual(b.ok && b.data, { n: 1 });
  assert.equal(b.ok && b.stale, true, "not flagged stale");
  assert.equal(b.ok && b.provenance.retrievedAt, "t1", "stale data presented as freshly retrieved");
  assert.equal(b.ok && b.staleReason?.kind, "rate_limited");
});

test("a failure with nothing cached throws rather than inventing data", async () => {
  clearCivicCache();
  await assert.rejects(
    () => cached("k", 60_000, async () => { throw new CivicFetchError({ kind: "network", message: "x" }); }),
  );
});
