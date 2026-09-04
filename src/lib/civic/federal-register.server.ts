import { cached } from "./cache.server.ts";
import { getJson, provenanceNow } from "./http.server.ts";
import type { CivicResult, CommentPeriod } from "./types";

if (typeof window !== "undefined")
  throw new Error("@/lib/civic/federal-register.server is server-only.");

const BASE = "https://www.federalregister.gov/api/v1/documents.json";
const TTL_MS = 6 * 60 * 60 * 1000;

type FrResponse = {
  results?: Array<{
    document_number?: string;
    title?: string;
    publication_date?: string;
    comments_close_on?: string | null;
    html_url?: string;
    agencies?: Array<{ name?: string }>;
  }>;
};

/**
 * Proposed rules with an open comment window.
 *
 * `comments_close_on` is a real regulatory deadline published by the agency —
 * the one kind of countdown this system permits, because missing it actually
 * forecloses the act.
 */
export async function openCommentPeriods(limit = 5): Promise<CivicResult<CommentPeriod[]>> {
  const params = new URLSearchParams({
    per_page: String(limit),
    order: "newest",
    "conditions[type][]": "PRORULE",
    "conditions[comment_date][gte]": new Date().toISOString().slice(0, 10),
  });
  for (const field of [
    "document_number",
    "title",
    "publication_date",
    "comments_close_on",
    "html_url",
    "agencies",
  ]) {
    params.append("fields[]", field);
  }
  const url = `${BASE}?${params}`;

  return cached(`fr:comments:${limit}`, TTL_MS, async () => {
    const body = await getJson<FrResponse>(url);
    const provenance = provenanceNow("Federal Register", "documents API", url);
    const data = (body.results ?? []).map(
      (raw): CommentPeriod => ({
        documentNumber: raw.document_number ?? "",
        title: raw.title ?? "Untitled",
        agencies: (raw.agencies ?? []).map((a) => a.name ?? "").filter(Boolean),
        publicationDate: raw.publication_date ?? "",
        commentsCloseOn: raw.comments_close_on ?? undefined,
        htmlUrl: raw.html_url ?? "",
      }),
    );
    return { data, provenance };
  });
}
