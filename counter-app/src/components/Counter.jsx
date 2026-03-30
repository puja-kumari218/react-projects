import React from "react";

const Counter = ({ count, onAdd, onRemove }) => {
  return (
    <div>
      <h2>Counter value: {count}</h2>
      <button onClick={onAdd}>Add Value</button>
      <button onClick={onRemove}>Remove value</button>
    </div>
  );
};

export default Counter;
