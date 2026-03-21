import React from "react";

export function Portfolio() {
  return (
    <div style={{
      minHeight: "100vh",
      backgroundColor: "#e8dfd5",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0 10vw",
      position: "relative",
      margin: 0
    }}>
      <div>
        <div style={{
          color: "#dd5f47",
          fontSize: "0.85rem",
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          marginBottom: "1rem",
          fontFamily: "-apple-system, sans-serif"
        }}>
            Coming Soon
        </div>
        <h1 style={{
          fontFamily: '"Georgia", "Times New Roman", serif',
          fontSize: "clamp(3rem, 6vw, 5.5rem)",
          fontWeight: 700,
          color: "#222",
          margin: "0 0 1.25rem 0",
          lineHeight: 1.1,
          letterSpacing: "-0.01em"
        }}>
          Portfolio Under Construction.
        </h1>
        <p style={{
          color: "#5c6072",
          fontSize: "clamp(1.2rem, 2vw, 1.8rem)",
          margin: 0,
          fontFamily: "-apple-system, sans-serif",
          maxWidth: "800px",
          lineHeight: 1.4,
          fontWeight: 300
        }}>
            I'm currently working on building out my portfolio to showcase my design research projects and case studies. Stay tuned for updates!
        </p>
      </div>

      <div style={{
        position: "absolute",
        bottom: "3rem",
        left: "10vw",
        color: "#c29b28",
        fontSize: "1.5rem"
      }}>
        ↓
      </div>
    </div>
  );
}
