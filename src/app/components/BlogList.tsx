import { Link } from "react-router";
import { getAllBlogs } from "../utils/blogs";

function formatDate(dateStr: string) {
  if (!dateStr) return "";
  const d = new Date(dateStr);
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function BlogList() {
  const blogs = getAllBlogs();

  return (
    <div style={{ maxWidth: "45rem", margin: "0 auto", padding: "1.5rem 1.25rem 4rem" }}>
      <style>{`
        .ap-hr { border: none; height: 1px; background: var(--ap-border); margin: 1rem 0; }
        .blog-card {
          display: block;
          padding: 1.1rem 1.2rem;
          border: 1px solid var(--ap-border);
          border-radius: 8px;
          text-decoration: none;
          color: var(--ap-text);
          background: var(--ap-accent-bg);
          transition: border-color 0.18s, box-shadow 0.18s, transform 0.12s;
          margin-bottom: 1rem;
        }
        .blog-card:hover {
          border-color: var(--ap-accent);
          box-shadow: 0 3px 14px rgba(13,71,161,0.1);
          transform: translateY(-2px);
        }
        .blog-card-title {
          font-size: 1.12rem;
          font-weight: 600;
          margin: 0 0 0.35rem;
          line-height: 1.35;
          color: var(--ap-text);
        }
        .blog-card:hover .blog-card-title {
          color: var(--ap-accent);
        }
        .blog-card-meta {
          font-size: 0.8rem;
          color: var(--ap-text-light);
          margin-bottom: 0.5rem;
          display: flex;
          gap: 0.8rem;
          flex-wrap: wrap;
          align-items: center;
        }
        .blog-card-excerpt {
          font-size: 0.9rem;
          color: var(--ap-text-light);
          line-height: 1.6;
          margin: 0 0 0.6rem;
        }
        .blog-tag {
          display: inline-block;
          padding: 0.12rem 0.5rem;
          border: 1px solid var(--ap-border);
          border-radius: 4px;
          font-size: 0.75rem;
          color: var(--ap-text-light);
          margin-right: 0.3rem;
        }
        .blog-card:hover .blog-tag {
          border-color: var(--ap-accent);
          color: var(--ap-accent);
        }
        .read-more {
          font-size: 0.82rem;
          color: var(--ap-accent);
          font-weight: 500;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in { animation: fadeInUp 0.4s ease both; }
      `}</style>

      {/* Header */}
      <div className="fade-in">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "0.5rem" }}>
          <div>
            <h1 style={{ margin: "0 0 0.2rem", fontSize: "clamp(1.7rem, 5vw, 2.2rem)" }}>
              Blog
            </h1>
            <p style={{ margin: 0, color: "var(--ap-text-light)", fontSize: "0.88rem" }}>
              Thoughts on HCI, design, technology, and speculative futures.
            </p>
          </div>
          <Link to="/" style={{ color: "var(--ap-accent)", fontSize: "0.88rem", textDecoration: "none" }}>
            ← Home
          </Link>
        </div>
      </div>

      <div className="ap-hr" style={{ marginTop: "1.2rem" }} />

      {/* Add-a-post hint */}
      <div
        style={{
          background: "var(--ap-accent-bg)",
          border: "1px dashed var(--ap-border)",
          borderRadius: "7px",
          padding: "0.75rem 1rem",
          marginBottom: "1.4rem",
          fontSize: "0.82rem",
          color: "var(--ap-text-light)",
        }}
      >
        📁 Drop a <code style={{ fontSize: "0.8rem" }}>.md</code> file into{" "}
        <code style={{ fontSize: "0.8rem" }}>/src/blogs/</code> with YAML frontmatter
        and it will appear here automatically.
      </div>

      {/* Post list */}
      {blogs.length === 0 ? (
        <p style={{ color: "var(--ap-text-light)", textAlign: "center", marginTop: "3rem" }}>
          No posts yet — add a <code>.md</code> file to <code>/src/blogs/</code>.
        </p>
      ) : (
        blogs.map((post, i) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="blog-card fade-in"
            style={{ animationDelay: `${i * 0.07}s` }}
          >
            <div className="blog-card-title">{post.title}</div>
            <div className="blog-card-meta">
              <span>{formatDate(post.date)}</span>
              <span>·</span>
              <span>{post.readTime} min read</span>
            </div>
            <p className="blog-card-excerpt">{post.excerpt}</p>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "0.5rem" }}>
              <div>
                {post.tags.map((tag) => (
                  <span key={tag} className="blog-tag">{tag}</span>
                ))}
              </div>
              <span className="read-more">Read →</span>
            </div>
          </Link>
        ))
      )}
    </div>
  );
}
