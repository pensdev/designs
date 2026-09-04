import { ChoiceGroup } from "./choice-group";
import { Field, Input } from "./field";
import { formatCount } from "@/lib/utils";

export type SignatureVisibility = "public" | "private";

type PetitionSignatureProps = {
  name: string;
  onNameChange: (value: string) => void;
  locality: string;
  onLocalityChange: (value: string) => void;
  visibility: SignatureVisibility;
  onVisibilityChange: (value: SignatureVisibility) => void;
  /** Position in the queue, used to show what a private signature looks like. */
  signatureNumber: number;
  /** Who ultimately receives the signature either way. */
  recipient: string;
};

/** First initial + last name, which is all a public list ever needs. */
function publicName(name: string) {
  const parts = name.trim().split(/\s+/u).filter(Boolean);
  if (parts.length === 0) return "";
  if (parts.length === 1) return parts[0];
  return `${parts[0].charAt(0).toUpperCase()}. ${parts[parts.length - 1]}`;
}

/**
 * Signature block with a visibility choice that tells the whole truth.
 *
 * "Private" is the word most petitions use to mean anonymous, and it is almost
 * never true — the signature is still delivered to the agency, because an
 * anonymous comment carries no weight. So the explanation names the recipient in
 * both states, and a live preview shows the exact string that will be published.
 * The choice is between public and unlisted, not between public and invisible.
 */
export function PetitionSignature({
  name,
  onNameChange,
  locality,
  onLocalityChange,
  visibility,
  onVisibilityChange,
  signatureNumber,
  recipient,
}: PetitionSignatureProps) {
  const isPublic = visibility === "public";
  const rendered = isPublic
    ? [publicName(name), locality.trim()].filter(Boolean).join(" — ") ||
      "Your name will appear here"
    : `Signature #${formatCount(signatureNumber)}`;

  return (
    <div className="grid gap-3">
      <Field id="sig-name" label="Full name">
        <Input
          id="sig-name"
          value={name}
          onChange={(event) => onNameChange(event.target.value)}
          autoComplete="name"
        />
      </Field>
      <Field id="sig-locality" label="Town and state">
        <Input
          id="sig-locality"
          value={locality}
          onChange={(event) => onLocalityChange(event.target.value)}
          placeholder="Babylon, NY"
        />
      </Field>

      <div>
        <p className="mt-0 mb-1.5 text-sm font-medium text-ink">How your name is listed</p>
        <ChoiceGroup<SignatureVisibility>
          label="Signature visibility"
          value={visibility}
          onChange={onVisibilityChange}
          options={[
            { value: "public", label: "List publicly" },
            { value: "private", label: "Keep unlisted" },
          ]}
        />
      </div>

      <div className="rounded-record border border-line bg-canvas px-3 py-2.5">
        <p className="m-0 font-mono text-xs tracking-widest text-ink-subtle uppercase">
          On the public list
        </p>
        <p className="mt-1 mb-0 font-mono text-sm text-ink">{rendered}</p>
        <p className="mt-2 mb-0 border-t border-line pt-2 text-xs leading-relaxed text-ink-muted">
          {isPublic
            ? `Your first initial, last name, and town appear on the public list. Your full name, email, and address go to ${recipient} in the filed comment and are not published.`
            : `Nothing identifying appears on the public list. Your full name and address still go to ${recipient} in the filed comment — an unsigned comment carries no weight, so this is unlisted, not anonymous.`}
        </p>
      </div>
    </div>
  );
}
