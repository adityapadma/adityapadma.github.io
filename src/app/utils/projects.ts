// Loads all .md files from /src/projects/ using Vite's import.meta.glob
// Each file should start with YAML frontmatter between --- delimiters:
//
//   ---
//   id: "my-project"
//   title: "My Project Title"
//   status: "Completed"
//   tags: ["Tag1", "Tag2"]
//   excerpt: "Short description shown on the portfolio listing page."
//   heroImage: "/portfolio/media/my-project/hero.jpg"
//   pageUrl: "/portfolio/my-project.html"
//   order: 1
//   updatedAt: "2026-01-01"
//   ---
//
//   Optional longer description body here...
//
// To add a new project, simply drop a .md file into /src/projects/ and fill
// in the frontmatter. It will appear automatically on the /portfolio page.
//
// Required fields: id, title, excerpt, pageUrl, order
// Optional fields: status, tags, heroImage, updatedAt

const rawFiles = import.meta.glob("/src/projects/*.md", {
  query: "?raw",
  eager: true,
}) as Record<string, { default: string }>;

// ── Types ────────────────────────────────────────────────────────────────────

export interface ProjectMeta {
  id: string;
  title: string;
  status: string;
  tags: string[];
  excerpt: string;
  heroImage: string;
  pageUrl: string;
  order: number;
  updatedAt: string;
}

// ── Frontmatter parser ────────────────────────────────────────────────────────
// Shared logic with blogs.ts — parses YAML-style frontmatter between --- delimiters.

function parseFrontmatter(raw: string): {
  data: Record<string, string | string[] | number>;
  content: string;
} {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: raw };

  const data: Record<string, string | string[] | number> = {};
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
    } else if (!isNaN(Number(val)) && val !== "") {
      // Parse numbers  e.g.  order: 1
      data[key] = Number(val);
    } else {
      data[key] = val;
    }
  });

  return { data, content: match[2] };
}

// ── Validation ────────────────────────────────────────────────────────────────

const REQUIRED_FIELDS = ["id", "title", "excerpt", "pageUrl", "order"] as const;

function isValid(
  data: Record<string, string | string[] | number>,
  filePath: string
): boolean {
  for (const field of REQUIRED_FIELDS) {
    if (!data[field] && data[field] !== 0) {
      if (import.meta.env.DEV) {
        console.warn(
          `[projects.ts] Skipping "${filePath}" — missing required field: "${field}"`
        );
      }
      return false;
    }
  }
  return true;
}

// ── Public API ────────────────────────────────────────────────────────────────

/** Returns all project metadata, sorted by `order` ascending. */
export function getAllProjects(): ProjectMeta[] {
  return Object.entries(rawFiles)
    .map(([path, mod]) => {
      const { data } = parseFrontmatter(mod.default);

      if (!isValid(data, path)) return null;

      return {
        id: (data.id as string) || "",
        title: (data.title as string) || "",
        status: (data.status as string) || "Unknown",
        tags: (data.tags as string[]) || [],
        excerpt: (data.excerpt as string) || "",
        heroImage: (data.heroImage as string) || "",
        pageUrl: (data.pageUrl as string) || "",
        order: typeof data.order === "number" ? data.order : 999,
        updatedAt: (data.updatedAt as string) || "",
      } satisfies ProjectMeta;
    })
    .filter((p): p is ProjectMeta => p !== null)
    .sort((a, b) => a.order - b.order);
}
