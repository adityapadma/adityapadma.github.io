import { NavLink, Outlet, useLocation } from "react-router";

export function Layout() {
  const location = useLocation();

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Avenir Next", Avenir, "Nimbus Sans L", Roboto, "Noto Sans", "Segoe UI", Arial, Helvetica, sans-serif',
        color: "var(--ap-text)",
        background: "var(--ap-bg)",
        minHeight: "100vh",
      }}
    >
      <style>{`
        :root {
          --ap-bg: #ffffff;
          --ap-accent-bg: #f5f7ff;
          --ap-text: #212121;
          --ap-text-light: #585858;
          --ap-border: #898EA4;
          --ap-accent: #0d47a1;
        }
        @media (prefers-color-scheme: dark) {
          :root {
            --ap-bg: #212121;
            --ap-accent-bg: #2b2b2b;
            --ap-text: #dcdcdc;
            --ap-text-light: #ababab;
            --ap-border: #4a4f6a;
            --ap-accent: #91b6e0;
          }
        }
        @keyframes rainbow_animation {
          0%, 100% { background-position: 0 0; }
          50% { background-position: 100% 0; }
        }
        .rainbow-text {
          background: linear-gradient(to right, #6666ff, #0099ff, #00ff00, #ff3399, #6666ff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: rainbow_animation 6s ease-in-out infinite;
          background-size: 400% 100%;
        }
        .ap-nav-link {
          display: inline-block;
          margin: 0 0.35rem;
          padding: 0.15rem 0.9rem;
          border: 1px solid var(--ap-border);
          border-radius: 5px;
          color: var(--ap-text);
          text-decoration: none;
          font-size: 0.95rem;
          transition: border-color 0.15s, color 0.15s;
        }
        .ap-nav-link:hover, .ap-nav-link.active {
          border-color: var(--ap-accent);
          color: var(--ap-accent);
        }
        .ap-body {
          max-width: 45rem;
          margin: 0 auto;
          padding: 0 1rem;
        }
        .ap-hr {
          border: none;
          height: 1px;
          background: var(--ap-border);
          margin: 1rem 0;
        }
      `}</style>

      {/* Site header nav */}
      <header
        style={{
          background: "var(--ap-accent-bg)",
          borderBottom: "1px solid var(--ap-border)",
          padding: "0.75rem 1rem",
        }}
      >
        <div
          style={{
            maxWidth: "45rem",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "0.5rem",
          }}
        >
          <NavLink
            to="/"
            style={{
              fontWeight: 600,
              fontSize: "1rem",
              color: "var(--ap-text)",
              textDecoration: "none",
              letterSpacing: "0.01em",
            }}
          >
            Aditya Padmagirwar
          </NavLink>
          <nav style={{ display: "flex", flexWrap: "wrap", alignItems: "center" }}>
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `ap-nav-link${isActive ? " active" : ""}`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `ap-nav-link${isActive ? " active" : ""}`
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/game"
              className={({ isActive }) =>
                `ap-nav-link${isActive ? " active" : ""}`
              }
            >
              Game
            </NavLink>
          </nav>
        </div>
      </header>

      {/* Page content */}
      <main>
        <Outlet />
      </main>

      {/* Footer */}
      <footer
        style={{
          marginTop: "4rem",
          padding: "2rem 1rem 1.5rem",
          color: "var(--ap-text-light)",
          fontSize: "0.85rem",
          textAlign: "center",
          borderTop: "1px solid var(--ap-border)",
        }}
      >
        <p style={{ margin: 0 }}>
          © {new Date().getFullYear()} Aditya Padmagirwar ·{" "}
          <a
            href="https://github.com/adityapadma/adityapadma.github.io"
            target="_blank"
            rel="noreferrer"
            style={{ color: "var(--ap-accent)" }}
          >
            View on GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}
