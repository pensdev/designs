import { useState } from "react";
import {
  AlertBanner,
  Button,
  Card,
  Field,
  IdentityBar,
  Input,
  PaidForBy,
  PetitionCounter,
  ProvenanceStamp,
} from "@/components/forum";
import { ORG_META, type Org } from "@/lib/theme";

export function PetitionForm({ org }: { org: Org }) {
  const meta = ORG_META[org];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [zip, setZip] = useState("");
  const [count, setCount] = useState(18420);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | undefined>();

  function submit() {
    setError(undefined);
    if (!name.trim() || !email.trim() || zip.trim().length < 5) {
      setError("Name, email, and a 5-digit ZIP are required.");
      return;
    }
    setCount((c) => c + 1);
    setDone(true);
  }

  return (
    <Card variant="action" className="max-w-md">
      <IdentityBar orgName={meta.committee} orgType={meta.type} />
      <AlertBanner
        tone="warning"
        title="Comment period closes Sept 12."
        children="Source: Federal Register. This is a real deadline, not a marketing timer."
      />
      <h2 className="mt-4 mb-2 font-display text-2xl text-ink">Require disclosure on paid issue ads</h2>
      <p className="mt-0 mb-4 text-sm text-ink-muted">
        Signatures are delivered as a docket comment to the agency — not added to a hidden list.
      </p>
      <PetitionCounter current={count} goal={25000} updatedAt="today, 4:10 p.m. ET" />
      {done ? (
        <p className="mt-4 mb-0 rounded-md bg-success-soft px-3 py-3 text-sm text-success" role="status">
          Signed. District offices matching {zip} will receive this comment.
        </p>
      ) : (
        <div className="mt-4 grid gap-3">
          <Field id="pet-name" label="Full name">
            <Input id="pet-name" value={name} onChange={(e) => setName(e.target.value)} />
          </Field>
          <Field id="pet-email" label="Email">
            <Input
              id="pet-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Field>
          <Field id="pet-zip" label="ZIP code" hint="Used only to resolve your district.">
            <Input
              id="pet-zip"
              inputMode="numeric"
              maxLength={5}
              value={zip}
              onChange={(e) => setZip(e.target.value.replace(/\D/g, "").slice(0, 5))}
            />
          </Field>
          {error ? (
            <p className="m-0 text-sm text-danger" role="alert">
              {error}
            </p>
          ) : null}
          <Button type="button" size="lg" className="w-full" onClick={submit}>
            Sign the petition
          </Button>
        </div>
      )}
      <div className="mt-4">
        <ProvenanceStamp source="Federal Register" retrieved="Aug 28, 2026" api="docket" />
      </div>
      <PaidForBy committee={meta.committee} independentExpenditure={meta.type !== "campaign"} />
    </Card>
  );
}
