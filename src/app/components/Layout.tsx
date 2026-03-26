import { useState, useEffect, useRef } from "react";
import { NavLink, Outlet, useLocation } from "react-router";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("theme") as Theme | null;
  if (stored === "light" || stored === "dark") return stored;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function Layout() {
  const location = useLocation();
  const [theme, setTheme] = useState<Theme>(getInitialTheme);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [menuOpen]);

  const toggleTheme = () => setTheme((t) => (t === "dark" ? "light" : "dark"));

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
        :root, [data-theme="light"] {
          --ap-bg: #fdf6e3;
          --ap-accent-bg: #eee8d5;
          --ap-text: #586e75;
          --ap-text-light: #93a1a1;
          --ap-border: #93a1a1;
          --ap-accent: #268bd2;
        }
        [data-theme="dark"] {
          --ap-bg: #212121;
          --ap-accent-bg: #2b2b2b;
          --ap-text: #dcdcdc;
          --ap-text-light: #ababab;
          --ap-border: #4a4f6a;
          --ap-accent: #91b6e0;
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
        .ap-nav-link-mobile {
          display: block;
          padding: 0.15rem 0.9rem;
          margin: 0.1rem 0;
          color: var(--ap-text);
          text-decoration: none;
          font-size: 0.95rem;
          border: 1px solid var(--ap-border);
          border-radius: 5px;
          transition: border-color 0.15s, color 0.15s;
        }
        .ap-nav-link-mobile:hover, .ap-nav-link-mobile.active {
          border-color: var(--ap-accent);
          color: var(--ap-accent);
        }
        .ap-hamburger {
          display: none;
          background: none;
          border: 1px solid var(--ap-border);
          border-radius: 5px;
          padding: 0.2rem 0.55rem;
          cursor: pointer;
          font-size: 1.25rem;
          color: var(--ap-text);
          transition: border-color 0.15s;
          line-height: 1;
          align-items: center;
          justify-content: center;
        }
        .ap-hamburger:hover {
          border-color: var(--ap-accent);
        }
        .ap-desktop-nav {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 0.15rem;
        }
        .ap-menu-container {
          position: relative;
        }
        .ap-dropdown-menu {
          position: fixed;
          top: 3.5rem;
          right: 1rem;
          background: var(--ap-accent-bg);
          border: 1px solid var(--ap-border);
          border-radius: 5px;
          min-width: 200px;
          padding: 0.5rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          z-index: 100;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .ap-dropdown-menu-overlay {
          position: fixed;
          inset: 0;
          z-index: 99;
        }
        @media (max-width: 640px) {
          .ap-desktop-nav {
            display: none;
          }
          .ap-hamburger {
            display: flex;
          }
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
              textDecorationLine: "none",
              letterSpacing: "0.01em",
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <img
              src="/favicons/favicon-32x32.png"
              alt="Logo"
              style={{ width: "24px", height: "24px", borderRadius: "4px" }}
            />
            Aditya Padmagirwar
          </NavLink>
          
          {/* Desktop Navigation */}
          <nav className="ap-desktop-nav">
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
              to="/portfolio"
              className={({ isActive }) =>
                `ap-nav-link${isActive ? " active" : ""}`
              }
            >
              Portfolio
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `ap-nav-link${isActive ? " active" : ""}`
              }
            >
              Blog
            </NavLink>
            <button
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              style={{
                background: "none",
                border: "1px solid var(--ap-border)",
                borderRadius: "5px",
                padding: "0.2rem 0.55rem",
                cursor: "pointer",
                fontSize: "1.05rem",
                lineHeight: 1,
                color: "var(--ap-text)",
                marginLeft: "0.2rem",
                transition: "border-color 0.15s",
              }}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          </nav>

          {/* Mobile Navigation Dropdown Menu */}
          <div className="ap-menu-container" ref={menuRef}>
            <button
              className="ap-hamburger"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              title="Toggle navigation menu"
            >
              ☰
            </button>
            {menuOpen && (
              <>
                <div className="ap-dropdown-menu-overlay" onClick={() => setMenuOpen(false)} />
                <div className="ap-dropdown-menu">
                  <NavLink
                    to="/"
                    end
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `ap-nav-link-mobile${isActive ? " active" : ""}`
                    }
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/portfolio"
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `ap-nav-link-mobile${isActive ? " active" : ""}`
                    }
                  >
                    Portfolio
                  </NavLink>
                  <NavLink
                    to="/blog"
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `ap-nav-link-mobile${isActive ? " active" : ""}`
                    }
                  >
                    Blog
                  </NavLink>
                  <hr style={{ margin: "0.25rem -0.5rem", background: "var(--ap-border)", border: "none", height: "1px" }} />
                  <button
                    onClick={() => {
                      toggleTheme();
                      setMenuOpen(false);
                    }}
                    style={{
                      background: "none",
                      border: "1px solid var(--ap-border)",
                      padding: "0.15rem 0.9rem",
                      margin: "0.1rem 0",
                      cursor: "pointer",
                      fontSize: "0.95rem",
                      lineHeight: 1,
                      color: "var(--ap-text)",
                      borderRadius: "5px",
                      textAlign: "left",
                      transition: "border-color 0.15s, color 0.15s",
                      width: "100%",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = "var(--ap-accent)";
                      e.currentTarget.style.color = "var(--ap-accent)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "var(--ap-border)";
                      e.currentTarget.style.color = "var(--ap-text)";
                    }}
                  >
                    {theme === "dark" ? "☀️ Light Mode" : "🌙 Dark Mode"}
                  </button>
                </div>
              </>
            )}
          </div>
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
