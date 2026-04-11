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
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl border border-white shadow-lg p-10 w-full max-w-lg text-center">

        <h1 className="font-bold text-3xl bg-gradient-to-br from-pink-500 to-violet-600 bg-clip-text text-transparent mb-1 leading-tight">
          Color Palette
        </h1>
        <p className="text-xs text-pink-400 italic font-light mb-7 tracking-wide">
          Paint your world with beautiful hues
        </p>

        <div className="w-14 h-1 bg-gradient-to-r from-pink-400 to-violet-400 rounded-full mx-auto my-4" />

        {/* Color Grid */}
        <div className="grid grid-cols-4 gap-3 mt-6">
          {colors.map((c) => (
            <button
              key={c.value}
              className="rounded-2xl py-3.5 px-2 font-semibold text-xs cursor-pointer text-white transition-all hover:-translate-y-1 hover:scale-105 flex flex-col items-center"
              onClick={() => setColor(c.value)}
              style={{
                backgroundColor: c.value,
                boxShadow: `0 4px 14px ${c.value}70`,
              }}
            >
              {c.name}
            </button>
          ))}
        </div>

        {/* Active Color Display */}
        <div className="mt-6 p-3 bg-white/70 rounded-2xl flex items-center justify-center gap-3">
          <div
            className="w-8 h-8 rounded-full border-4 border-white shadow-md shrink-0"
            style={{ backgroundColor: color }}
          />
          <span className="text-violet-800 font-semibold text-sm">
            Active: <code className="tracking-widest">{color}</code>
          </span>
        </div>

        {/* Reset button */}
        <button
          className="mt-5 bg-transparent text-violet-700 border-2 border-violet-300 rounded-full px-7 py-2.5 font-semibold text-sm cursor-pointer transition-all hover:bg-violet-100 hover:border-violet-500 hover:-translate-y-0.5"
          onClick={() => setColor("#fdf2f8")}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;
