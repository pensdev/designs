import { useState } from "react";
import { Button, Card, FieldRow, Input, OfficialCard } from "@/components/forum";
import { OFFICIALS } from "@/lib/forum-data";

export function OfficialLookup() {
  const [zip, setZip] = useState("11702");
  const [query, setQuery] = useState("11702");
  const [message, setMessage] = useState<string | undefined>();
  const results = OFFICIALS[query];

  function lookup() {
    const z = zip.trim();
    setQuery(z);
    if (!OFFICIALS[z]) {
      setMessage("No sample record for that ZIP. Try 11702 (NY-02) or 20001 (DC).");
    } else {
      setMessage(undefined);
    }
  }

  return (
    <div className="grid gap-4">
      <Card>
        <h2 className="mt-0 mb-1 font-display text-2xl text-ink">Find your officials</h2>
        <p className="mt-0 mb-4 text-sm text-ink-muted">
          Demo lookup. Live products should resolve from Census TIGER + member APIs, with an as-of
          date on every card.
        </p>
        <FieldRow
          id="zip"
          label="ZIP code"
          action={
            <Button type="button" variant="official" onClick={lookup}>
              Look up
            </Button>
          }
        >
          <Input
            id="zip"
            inputMode="numeric"
            maxLength={5}
            value={zip}
            onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
            onKeyDown={(e) => {
              if (e.key === "Enter") lookup();
            }}
          />
        </FieldRow>
        {message ? (
          <p className="mt-3 mb-0 text-sm text-ink-muted" role="status">
            {message}
          </p>
        ) : null}
      </Card>
      {results?.map((official) => (
        <OfficialCard
          key={official.name}
          official={official}
          onCall={() => setMessage(`Call ${official.phone ?? "the office during listed hours"}.`)}
          onWrite={() =>
            setMessage("Write opens a disclosed blast — the organization is the sender.")
          }
          onRecord={() => setMessage("Roll call is part of the record — sourced, not a screenshot.")}
        />
      ))}
    </div>
  );
}
