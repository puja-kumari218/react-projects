import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [length, setLength]             = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed]   = useState(false);
  const [Password, setPassword]         = useState("");
  const [copied, setCopied]             = useState(false);
  const passwordRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str  = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed)   str += "!@#$%^&*";
    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length);
      pass += str.charAt(char);
    }
    setPassword(pass);
  }, [length, numberAllowed, charAllowed]);

  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed]);

  const copyPassword = () => {
    passwordRef.current.select();
    window.navigator.clipboard.writeText(Password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="page-wrapper">
      <div className="glass-card">

        {/* Header */}
        <div style={{ textAlign: "center", fontSize: "2.5rem", marginBottom: "6px" }}>🔐</div>
        <h1 className="title-gradient">Password Generator</h1>
        <p className="subtitle-quote">Your secrets are safe with me 💜</p>

        <div className="cute-divider" />

        {/* Password display + copy */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "1.4rem", marginTop: "1rem" }}>
          <input
            className="input-cute"
            type="text"
            value={Password}
            ref={passwordRef}
            readOnly
            style={{ fontFamily: "monospace", letterSpacing: "1.5px", fontSize: "0.88rem" }}
          />
          <button
            className="btn-cute"
            onClick={copyPassword}
            style={{
              flexShrink: 0,
              padding: "12px 18px",
              background: copied
                ? "linear-gradient(135deg, #10b981, #059669)"
                : undefined,
            }}
          >
            {copied ? "✓ Done!" : "Copy"}
          </button>
        </div>

        {/* Length Slider */}
        <div style={{ marginBottom: "1.3rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "8px",
            }}
          >
            <span className="label-cute">Password Length</span>
            <span className="pill-badge">{length}</span>
          </div>
          <input
            className="range-cute"
            type="range"
            min={6}
            max={20}
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontFamily: "var(--font)",
              fontSize: "0.7rem",
              color: "#c084fc",
              marginTop: "4px",
            }}
          >
            <span>6</span>
            <span>20</span>
          </div>
        </div>

        {/* Options */}
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "1.4rem" }}>
          <label style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}>
            <input
              className="checkbox-cute"
              type="checkbox"
              onChange={() => setNumberAllowed(!numberAllowed)}
            />
            <span
              style={{
                fontFamily: "var(--font)",
                fontSize: "0.9rem",
                color: "#5b21b6",
                fontWeight: 500,
              }}
            >
              Include Numbers 🔢
            </span>
          </label>

          <label style={{ display: "flex", alignItems: "center", gap: "12px", cursor: "pointer" }}>
            <input
              className="checkbox-cute"
              type="checkbox"
              onChange={() => setCharAllowed(!charAllowed)}
            />
            <span
              style={{
                fontFamily: "var(--font)",
                fontSize: "0.9rem",
                color: "#5b21b6",
                fontWeight: 500,
              }}
            >
              Include Symbols ✨
            </span>
          </label>
        </div>

        {/* Regenerate */}
        <button
          className="btn-cute"
          onClick={passwordGenerator}
          style={{ width: "100%", justifyContent: "center" }}
        >
          🔄 Generate New Password
        </button>

      </div>
    </div>
  );
}

export default App;
