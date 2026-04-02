import React from "react";

const Counter = ({ count, onAdd, onRemove }) => {
  return (
    <div>
      {/* Big number */}
      <div className="count-display">{count}</div>

      {/* Buttons */}
      <div style={{ display: "flex", gap: "16px", justifyContent: "center", marginTop: "0.8rem" }}>
        <button
          className="btn-cute"
          onClick={onRemove}
          style={{ background: "linear-gradient(135deg, #f97316, #ef4444)" }}
        >
          − Remove
        </button>
        <button className="btn-cute" onClick={onAdd}>
          + Add
        </button>
      </div>
    </div>
  );
};

export default Counter;
