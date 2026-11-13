/**
 * Renders article text written in the admin. Kept deliberately simple and safe (no HTML):
 * blank lines separate paragraphs, "## " starts a heading, and lines starting with "- " form a list.
 */
export function ArticleBody({ text }: { text: string }) {
  const blocks = text.replace(/\r\n/g, "\n").split(/\n\s*\n/).map((b) => b.trim()).filter(Boolean);

  return (
    <div className="space-y-5 text-[1.05rem] leading-relaxed text-ink-700">
      {blocks.map((block, i) => {
        if (block.startsWith("## ")) {
          return (
            <h2 key={i} className="font-heading pt-4 text-2xl font-bold uppercase tracking-wide text-navy-900">
              {block.slice(3)}
            </h2>
          );
        }
        const lines = block.split("\n");
        if (lines.every((l) => l.trim().startsWith("- "))) {
          return (
            <ul key={i} className="list-disc space-y-2 pl-6 marker:text-gold-500">
              {lines.map((l, j) => (
                <li key={j}>{l.trim().slice(2)}</li>
              ))}
            </ul>
          );
        }
        return <p key={i}>{block}</p>;
      })}
    </div>
  );
}
