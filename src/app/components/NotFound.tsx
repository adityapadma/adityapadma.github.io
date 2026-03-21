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
      
      <div
        style={{
          fontSize: "2.5rem",
          marginBottom: "0.5rem",
          fontFamily: "'JetBrains Mono', monospace",
        }}
      >
        🌌 404 Error: Page Not Found
      </div>
      
      
      <div
        style={{
          marginBottom: "1.5rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <img
          src="https://media1.tenor.com/m/TlfAvuz0tLMAAAAd/obi-wan-kenobi-these-are-not-the-droids.gif"
          alt="These aren't the droids you're looking for"
          style={{ maxWidth: "100%", borderRadius: "8px" }}
        />
      </div>
      
      
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
