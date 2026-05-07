import React from "react";

function Counter({ count, setCount }) {
  return (
    <div>
      <h2 className="text-center text-amber-800">{count}</h2>
      <button onClick={() => setCount(count + 1)}>add value</button>
            <button onClick={() => setCount(count -1)}>Remove value</button>

    </div>
  );
}

export default Counter;
  