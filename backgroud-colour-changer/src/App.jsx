import React from "react";
import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("");
  return (
    <div style={{ backgroundColor: color, height: "100vh" }}>

      <h1>Backgroud Changer</h1>
      <button onClick={() => setColor("red")}>Red</button>
      <button onClick={() => setColor("blue")}>blue</button>

      <button onClick={() => setColor("green")}>green</button>
      </div>
  );
};

export default App;
