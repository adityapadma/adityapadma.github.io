import { Link } from "react-router";

export function NotFound() {
  return (
    <div
      style={{
        maxWidth: "45rem",
        margin: "4rem auto",
        padding: "0 1.25rem",
        textAlign: "center",
      }}
    >
      <div style={{ fontSize: "3rem", marginBottom: "0.5rem" }}>🌌</div>
      <h1 style={{ fontSize: "2.5rem", margin: "0 0 0.5rem" }}>404</h1>
      <p style={{ color: "var(--ap-text-light)", marginBottom: "1.5rem" }}>
        These aren't the droids you're looking for.
      </p>
      <Link
        to="/"
        style={{
          color: "var(--ap-accent)",
          textDecoration: "none",
          border: "1px solid var(--ap-border)",
          padding: "0.4rem 1.1rem",
          borderRadius: "5px",
          fontSize: "0.95rem",
        }}
      >
        ← Back to Home
      </Link>
    </div>
  );
}
