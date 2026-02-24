// Loads all .md files from /src/blogs/ using Vite's import.meta.glob
// Each file should start with YAML frontmatter between --- delimiters:
//
//   ---
//   title: "My Post Title"
//   date: "2026-01-01"
//   tags: ["Tag1", "Tag2"]
//   excerpt: "Short description shown on the listing page."
//   ---
//
//   Markdown content here...
//
// To add a new blog post, simply drop a .md file into /src/blogs/ and it
// will appear automatically on the /blog listing page.

const rawFiles = import.meta.glob("/src/blogs/*.md", {
  query: "?raw",
  eager: true,
}) as Record<string, { default: string }>;

// ── Types ────────────────────────────────────────────────────────────────────

export interface BlogMeta {
  slug: string;
  title: string;
  date: string;
  tags: string[];
  excerpt: string;
  readTime: number;
}

export interface Blog extends BlogMeta {
  content: string; // raw markdown body (no frontmatter)
}

// ── Frontmatter parser ────────────────────────────────────────────────────────

function parseFrontmatter(raw: string): {
  data: Record<string, string | string[]>;
  content: string;
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const data: Record<string, string | string[]> = {};
  match[1].split("\n").forEach((line) => {
    const colonIdx = line.indexOf(":");
    if (colonIdx === -1) return;
    const key = line.slice(0, colonIdx).trim();
    let val = line.slice(colonIdx + 1).trim();

    // Strip surrounding quotes
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1);
    }

    // Parse arrays  e.g.  ["Tag1", "Tag2"]
    if (val.startsWith("[") && val.endsWith("]")) {
      data[key] = val
        .slice(1, -1)
        .split(",")
        .map((s) => s.trim().replace(/^["']|["']$/g, ""))
        .filter(Boolean);
    } else {
      data[key] = val;
    }
  });

  return { data, content: match[2] };
}

function estimateReadTime(content: string): number {
  const words = content.trim().split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

function stripMarkdown(text: string): string {
  return text
    .replace(/#{1,6}\s+/g, "")
    .replace(/[*_~`]/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .trim();
}

// ── Public API ────────────────────────────────────────────────────────────────

/** Returns all blog metadata, sorted newest-first. */
export function getAllBlogs(): BlogMeta[] {
  return Object.entries(rawFiles)
    .map(([path, mod]) => {
      const slug = path.replace("/src/blogs/", "").replace(".md", "");
      const { data, content } = parseFrontmatter(mod.default);

      const fallbackExcerpt =
        stripMarkdown(content).slice(0, 160) + "…";

      return {
        slug,
        title: (data.title as string) || slug,
        date: (data.date as string) || "",
        tags: (data.tags as string[]) || [],
        excerpt: (data.excerpt as string) || fallbackExcerpt,
        readTime: estimateReadTime(content),
      };
    })
    .sort(
      (a, b) =>
        new Date(b.date).getTime() - new Date(a.date).getTime()
    );
}

/** Returns a single blog post by slug, or null if not found. */
export function getBlogBySlug(slug: string): Blog | null {
  const entry = Object.entries(rawFiles).find(
    ([path]) =>
      path.replace("/src/blogs/", "").replace(".md", "") === slug
  );
  if (!entry) return null;

  const [, mod] = entry;
  const { data, content } = parseFrontmatter(mod.default);
  const fallbackExcerpt = stripMarkdown(content).slice(0, 160) + "…";

  return {
    slug,
    title: (data.title as string) || slug,
    date: (data.date as string) || "",
    tags: (data.tags as string[]) || [],
    excerpt: (data.excerpt as string) || fallbackExcerpt,
    readTime: estimateReadTime(content),
    content,
  };
}
