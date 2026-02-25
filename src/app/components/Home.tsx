import { Link } from "react-router";

const socialLinks = [
  {
    href: "https://www.twitter.com/aadityapadma",
    label: "Twitter / X",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    href: "https://www.instagram.com/aadityapadma",
    label: "Instagram",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/adityapadmagirwar",
    label: "LinkedIn",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://www.github.com/adityapadma",
    label: "GitHub",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
      </svg>
    ),
  },
  {
    href: "https://www.behance.com/adityapadma",
    label: "Behance",
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M6.938 4.503c.702 0 1.34.06 1.92.188.577.13 1.07.33 1.485.61.41.28.733.65.96 1.12.225.47.34 1.05.34 1.73 0 .74-.17 1.36-.507 1.86-.338.5-.837.9-1.502 1.22.906.26 1.576.72 2.022 1.37.448.66.665 1.45.665 2.36 0 .75-.13 1.39-.41 1.93-.28.55-.67 1-1.16 1.35-.48.348-1.05.6-1.7.756-.63.157-1.3.235-2.006.235H0V4.51l6.938-.007zm-.23 5.57c.574 0 1.036-.14 1.38-.42.35-.27.52-.7.52-1.29 0-.32-.058-.59-.173-.8a1.404 1.404 0 00-.464-.5 1.86 1.86 0 00-.664-.27 3.783 3.783 0 00-.796-.08H3.39v3.37l3.318-.007zm.15 5.836c.29 0 .565-.03.82-.09a2.02 2.02 0 00.675-.3c.193-.14.348-.32.462-.56.115-.24.17-.55.17-.91 0-.73-.205-1.25-.616-1.57-.413-.32-.963-.48-1.652-.48H3.39v3.91h3.468zm8.56-8.56c.58 0 1.11.07 1.59.22.48.15.89.36 1.22.64.33.28.59.62.76 1.02.17.4.26.86.26 1.37v.66c0 .26-.01.52-.03.77-.022.254-.065.5-.128.74H13.8c0 .7.21 1.22.63 1.56.42.34.963.51 1.63.51.56 0 1.04-.14 1.44-.41.4-.27.65-.56.73-.87h2.66c-.213.77-.644 1.42-1.29 1.96-.644.55-1.44.82-2.37 1.02-.23.04-.47.07-.72.09-.243.02-.49.03-.735.03-2.186 0-3.578-.44-4.51-1.31-.93-.87-1.396-2.17-1.396-3.88 0-.79.114-1.51.34-2.15.228-.64.553-1.18.975-1.63.42-.45.93-.8 1.52-1.04.59-.24 1.25-.36 1.98-.36zm.27 1.86c-.53 0-.97.15-1.32.46-.35.3-.56.77-.63 1.41h3.79c-.06-.64-.26-1.1-.6-1.41-.34-.3-.76-.46-1.24-.46zm2.78-4.73h-5.86v1.5h5.86v-1.5z" />
      </svg>
    ),
  },
];

const interests = [
  "Human-Computer Interaction",
  "Tangible User Interfaces",
  "Ubiquitous Computing",
  "Interactive Digital Narratives",
  "Immersive Media",
  "Design Futures",
  "Digital Sociology",
  "New Media Studies",
];

export function Home() {
  return (
    <div className="ap-body" style={{ paddingTop: "2rem", paddingBottom: "4rem" }}>
      <style>{`
        .ap-body { max-width: 45rem; margin: 0 auto; padding: 0 1.25rem; }
        .ap-hr { border: none; height: 1px; background: var(--ap-border); margin: 1.2rem 0; }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .fade-in { animation: fadeInUp 0.5s ease both; }
        .page-card, .page-card *, .page-card:hover, .page-card:visited {
          text-decoration: none !important;
        }
        .page-card {
          display: flex;
          align-items: center;
          gap: 1rem;
          padding: 1rem 1.2rem;
          border: 1px solid var(--ap-border);
          border-radius: 8px;
          color: var(--ap-text);
          transition: border-color 0.2s, box-shadow 0.2s, transform 0.15s;
          background: var(--ap-accent-bg);
        }
        .page-card:hover {
          border-color: var(--ap-accent);
          box-shadow: 0 4px 16px rgba(13,71,161,0.12);
          transform: translateY(-2px);
          color: var(--ap-accent);
        }
        .page-card-icon {
          font-size: 2rem;
          flex-shrink: 0;
        }
        .tag {
          display: inline-block;
          padding: 0.2rem 0.6rem;
          border: 1px solid var(--ap-border);
          border-radius: 4px;
          font-size: 0.82rem;
          color: var(--ap-text-light);
          margin: 0.25rem 0.2rem 0.25rem 0;
        }
        .social-link {
          color: var(--ap-text-light);
          transition: color 0.15s;
          display: inline-flex;
        }
        .social-link:hover {
          color: var(--ap-accent);
        }
      `}</style>

      {/* Hero */}
      <div className="fade-in" style={{ marginTop: "1.5rem" }}>
        <h1
          style={{
            fontSize: "clamp(2.2rem, 6vw, 3rem)",
            margin: "0 0 0.1rem",
            lineHeight: 1.1,
          }}
        >
          <span className="rainbow-text">Hello There!</span>
        </h1>
        <p style={{ color: "var(--ap-text-light)", margin: "0.3rem 0 0", fontSize: "0.95rem" }}>
          ✨ Welcome to my little corner of the internet
        </p>
      </div>

      <div className="ap-hr" />

      {/* Navigation cards */}
      <div
        className="fade-in"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1rem",
          margin: "1.2rem 0",
          animationDelay: "0.05s",
        }}
      >
        <Link to="/blog" className="page-card" style={{ textDecoration: "none", textDecorationLine: "none" }}>
          <span className="page-card-icon">📝</span>
          <div>
            <div style={{ fontWeight: 600, fontSize: "1rem" }}>Read the Blog</div>
            <div style={{ fontSize: "0.82rem", color: "var(--ap-text-light)", marginTop: "0.15rem" }}>
              Thoughts on HCI, design & digital futures
            </div>
          </div>
        </Link>
      </div>

      <ul style={{ paddingLeft: "1.4rem", margin: "0.5rem 0 0.8rem" }}>
        <li>
          📰 My blog is a Substack newsletter —{" "}
          <a
            href="https://adityasletters.substack.com/"
            target="_blank"
            rel="noreferrer"
            style={{ color: "var(--ap-accent)", textDecoration: "none"}}
          >
            Aditya's Letters
          </a>
        </li>
      </ul>

      <div className="ap-hr" />

      {/* About */}
      <div className="fade-in" style={{ animationDelay: "0.1s" }}>
        <h5 style={{ margin: "0 0 0.6rem", fontSize: "1.05rem", fontWeight: 600 }}>
          About Me.
        </h5>
        <p style={{ margin: "0 0 0.8rem", lineHeight: 1.65 }}>
          Hi there! I am <em><strong>Aditya Padmagirwar</strong></em> (he/him). I'm currently
          pursuing a Computer Science and Social Science undergraduate degree at Indraprastha
          Institute of Information Technology Delhi (IIIT-Delhi).
        </p>
        <p style={{ margin: "0 0 0.8rem", lineHeight: 1.65 }}>
          I'm fascinated by how people are connected through design using technology and through my
          work, I aim to develop Tangible User Interfaces and Ubiquitous Computing solutions that
          foster richer, intuitive interactions and transform how we engage with technology. My
          passion for science fiction and storytelling drives me to explore new forms of interactive
          digital narratives and digital futures that push the boundaries of technology and design,
          but also incorporate perspectives rooted in South Asian stories and experiences.
        </p>
        <p style={{ margin: "0 0 0.5rem", lineHeight: 1.65 }}>
          You can check out my Resume{" "}
          <a
            href="https://adityapadma.github.io/ap-autoCV"
            target="_blank"
            rel="noreferrer"
            style={{ color: "var(--ap-accent)", textDecoration: "none" }}
          >
            here
          </a>
          .
        </p>
      </div>

      {/* Research Interests */}
      <div className="fade-in" style={{ marginTop: "1rem", animationDelay: "0.15s" }}>
        <p style={{ margin: "0 0 0.5rem", color: "var(--ap-text-light)", fontSize: "0.88rem" }}>
          Research Interests:
        </p>
        <div>
          {interests.map((tag) => (
            <span key={tag} className="tag">
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="ap-hr" style={{ marginTop: "1.5rem" }} />

      {/* Social links */}
      <div
        className="fade-in"
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "1.2rem",
          padding: "0.5rem 0",
          animationDelay: "0.2s",
        }}
      >
        {socialLinks.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noreferrer"
            className="social-link"
            title={s.label}
          >
            {s.icon}
          </a>
        ))}
      </div>
    </div>
  );
}
