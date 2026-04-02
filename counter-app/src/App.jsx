import React, { useState } from 'react'
import Counter from './components/Counter'

const getEmoji = (count) => {
  if (count > 10) return '🎉';
  if (count > 0)  return '🌸';
  if (count === 0) return '✨';
  if (count < -5) return '🌚';
  return '💫';
};

const App = () => {
  const [count, setCount] = useState(0);
  const addValue    = () => setCount(count + 1);
  const removeValue = () => setCount(count - 1);
  const resetValue  = () => setCount(0);

  return (
    <div className="page-wrapper">
      <div className="glass-card" style={{ textAlign: "center" }}>

        <div style={{ fontSize: "2.5rem", marginBottom: "6px" }}>{getEmoji(count)}</div>
        <h1 className="title-gradient">Counter</h1>
        <p className="subtitle-quote">Every count is a tiny victory 💜</p>

        <div className="cute-divider" />

        <Counter count={count} onAdd={addValue} onRemove={removeValue} />

        {/* Reset */}
        <button
          className="btn-outline"
          onClick={resetValue}
          style={{ marginTop: "1.2rem" }}
        >
          🔄 Reset
        </button>

        {/* Dynamic message */}
        <p
          style={{
            marginTop: "1.2rem",
            fontFamily: "var(--font)",
            fontSize: "0.8rem",
            color: "#c084fc",
            fontStyle: "italic",
          }}
        >
          {count > 10
            ? "Wow, you're on fire! 🎉"
            : count > 0
            ? `You've counted ${count} time${count !== 1 ? 's' : ''} 🌸`
            : count < 0
            ? `${Math.abs(count)} below zero! 🌚`
            : 'Start counting! ✨'}
        </p>
      </div>
    </div>
  );
};

export default App;
