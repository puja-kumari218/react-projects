import React from "react";
import { useState } from "react";

const colors = [
  { name: "Rose Pink",  value: "#f43f5e" },
  { name: "Lavender",   value: "#8b5cf6" },
  { name: "Sky Blue",   value: "#0ea5e9" },
  { name: "Mint",       value: "#10b981" },
  { name: "Peach",      value: "#fb923c" },
  { name: "Lilac",      value: "#c084fc" },
  { name: "Hot Pink",   value: "#ec4899" },
  { name: "Coral",      value: "#f97316" },
  { name: "Teal",       value: "#14b8a6" },
  { name: "Indigo",     value: "#6366f1" },
  { name: "Gold",       value: "#f59e0b" },
  { name: "Blush",      value: "#fb7185" },
];

const App = () => {
  const [color, setColor] = useState("#fdf2f8");

  return (
    <div
      style={{ backgroundColor: color }}
      className="min-h-screen flex flex-col items-center justify-center p-6 transition-colors duration-700"
    >
      <div className="glass-card" style={{ textAlign: "center", maxWidth: "520px" }}>

        {/* Header */}
        <div style={{ fontSize: "2.6rem", marginBottom: "6px" }}>🎨</div>
        <h1 className="title-gradient">Color Palette</h1>
        <p className="subtitle-quote">✨ Paint your world with beautiful hues ✨</p>

        <div className="cute-divider" />

        {/* Color Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "12px",
            marginTop: "1.4rem",
          }}
        >
          {colors.map((c) => (
            <button
              key={c.value}
              className="swatch-btn"
              onClick={() => setColor(c.value)}
              style={{
                backgroundColor: c.value,
                boxShadow: `0 4px 14px ${c.value}70`,
              }}
            >
              <span style={{ fontSize: "1.1rem" }}>●</span>
              {c.name}
            </button>
          ))}
        </div>

        {/* Active Color Display */}
        <div
          style={{
            marginTop: "1.5rem",
            padding: "12px 18px",
            background: "rgba(255,255,255,0.7)",
            borderRadius: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "30px",
              height: "30px",
              borderRadius: "50%",
              backgroundColor: color,
              border: "3px solid white",
              boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
            }}
          />
          <span
            style={{
              fontFamily: "var(--font)",
              color: "#6b21a8",
              fontWeight: 600,
              fontSize: "0.88rem",
            }}
          >
            Active: <code style={{ letterSpacing: "1px" }}>{color}</code>
          </span>
        </div>

        {/* Reset button */}
        <button
          className="btn-outline"
          onClick={() => setColor("#fdf2f8")}
          style={{ marginTop: "1.2rem" }}
        >
          🌸 Reset
        </button>
      </div>
    </div>
  );
};

export default App;
