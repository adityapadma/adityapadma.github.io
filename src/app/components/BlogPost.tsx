import { useParams, Link, Navigate } from "react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getBlogBySlug } from "../utils/blogs";

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogBySlug(slug) : null;

  if (!post) return <Navigate to="/blog" replace />;

  return (
    <div style={{ maxWidth: "45rem", margin: "0 auto", padding: "1.5rem 1.25rem 4rem" }}>
      <style>{`
        .ap-hr { border: none; height: 1px; background: var(--ap-border); margin: 1rem 0; }

        /* ── Markdown body styles ── */
        .md-body { line-height: 1.75; }
        .md-body p { margin: 0 0 1.1rem; }
        .md-body h1 { font-size: 1.9rem; margin: 2.2rem 0 0.6rem; line-height: 1.2; }
        .md-body h2 { font-size: 1.35rem; margin: 2rem 0 0.6rem; line-height: 1.25; }
        .md-body h3 { font-size: 1.1rem; margin: 1.6rem 0 0.5rem; }
        .md-body h4 { font-size: 1rem; margin: 1.4rem 0 0.4rem; }
        .md-body ul, .md-body ol { padding-left: 1.5rem; margin: 0 0 1rem; }
        .md-body li { margin-bottom: 0.4rem; line-height: 1.65; }
        .md-body blockquote {
          margin: 1.5rem 0 1.5rem 0;
          padding: 0.5rem 1rem;
          border-left: 0.3rem solid var(--ap-accent);
          color: var(--ap-text-light);
          font-style: italic;
          background: var(--ap-accent-bg);
          border-radius: 0 5px 5px 0;
        }
        .md-body blockquote p { margin: 0; }
        .md-body a { color: var(--ap-accent); }
        .md-body a:hover { text-decoration: none; }
        .md-body code {
          font-family: Consolas, Menlo, Monaco, monospace;
          font-size: 0.88em;
          background: var(--ap-accent-bg);
          border: 1px solid var(--ap-border);
          border-radius: 3px;
          padding: 0.1em 0.35em;
        }
        .md-body pre {
          background: var(--ap-accent-bg);
          border: 1px solid var(--ap-border);
          border-radius: 6px;
          padding: 1rem 1.2rem;
          overflow-x: auto;
          margin: 0 0 1.1rem;
        }
        .md-body pre code {
          background: none;
          border: none;
          padding: 0;
          font-size: 0.9rem;
        }
        .md-body hr {
          border: none;
          height: 1px;
          background: var(--ap-border);
          margin: 1.5rem 0;
        }
        .md-body img {
          max-width: 100%;
          border-radius: 6px;
        }
        .md-body table {
          border-collapse: collapse;
          width: 100%;
          margin: 0 0 1rem;
          font-size: 0.92rem;
        }
        .md-body th, .md-body td {
          border: 1px solid var(--ap-border);
          padding: 0.45rem 0.7rem;
          text-align: left;
        }
        .md-body th { background: var(--ap-accent-bg); font-weight: 600; }
        .md-body strong { font-weight: 600; }
        .md-body em { font-style: italic; }

        /* Tags */
        .blog-tag {
          display: inline-block;
          padding: 0.18rem 0.55rem;
          border: 1px solid var(--ap-border);
          border-radius: 4px;
          font-size: 0.78rem;
          color: var(--ap-text-light);
          margin-right: 0.35rem;
          margin-bottom: 0.3rem;
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in { animation: fadeInUp 0.4s ease both; }
      `}</style>

      {/* Back link */}
      <Link
        to="/blog"
        style={{ color: "var(--ap-accent)", fontSize: "0.88rem", textDecoration: "none" }}
      >
        ← All posts
      </Link>

      <div className="ap-hr" />

      {/* Post header */}
      <header className="fade-in" style={{ marginBottom: "1.5rem" }}>
        <div style={{ marginBottom: "0.6rem" }}>
          {post.tags.map((tag) => (
            <span key={tag} className="blog-tag">{tag}</span>
          ))}
        </div>
        <h1
          style={{
            fontSize: "clamp(1.7rem, 5vw, 2.2rem)",
            lineHeight: 1.2,
            margin: "0 0 0.7rem",
          }}
        >
          {post.title}
        </h1>
        <div
          style={{
            display: "flex",
            gap: "1rem",
            color: "var(--ap-text-light)",
            fontSize: "0.83rem",
            flexWrap: "wrap",
            alignItems: "center",
          }}
        >
          <span>Aditya Padmagirwar</span>
          <span>·</span>
          <span>{formatDate(post.date)}</span>
          <span>·</span>
          <span>{post.readTime} min read</span>
        </div>
      </header>

      <div className="ap-hr" />

      {/* Markdown content */}
      <article className="md-body fade-in" style={{ animationDelay: "0.05s" }}>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </article>

      <div className="ap-hr" />

      {/* Footer nav */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: "0.8rem",
        }}
      >
        <Link
          to="/blog"
          style={{ color: "var(--ap-accent)", fontSize: "0.88rem", textDecoration: "none" }}
        >
          ← All posts
        </Link>
        <Link
          to="/"
          style={{ color: "var(--ap-accent)", fontSize: "0.88rem", textDecoration: "none" }}
        >
          Home →
        </Link>
      </div>
    </div>
  );
}
