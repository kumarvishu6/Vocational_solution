import fs from "node:fs";
import path from "node:path";

/**
 * True when a real headshot has been dropped into `public/`.
 *
 * The client hasn't supplied a photo of Cindy Fisher yet, so the About sections
 * render a monogram placeholder instead. Saving a file at `expert.photo`
 * (public/brand/cindy-fisher.jpg) swaps the real portrait in automatically —
 * no code change needed.
 *
 * Server-only: relies on the filesystem, so call it from Server Components.
 */
export function hasExpertPhoto(publicPath: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", publicPath));
  } catch {
    return false;
  }
}
