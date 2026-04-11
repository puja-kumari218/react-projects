import React, { useState } from 'react'
import Counter from './components/Counter'

const App = () => {
  const [count, setCount] = useState(0);
  const addValue    = () => setCount(count + 1);
  const removeValue = () => setCount(count - 1);
  const resetValue  = () => setCount(0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8">
      <div className="bg-white/80 backdrop-blur-lg rounded-3xl border border-white shadow-lg p-10 w-full max-w-md text-center">

        <h1 className="font-bold text-3xl bg-gradient-to-br from-pink-500 to-violet-600 bg-clip-text text-transparent mb-1 leading-tight">
          Counter
        </h1>
        <p className="text-xs text-pink-400 italic font-light mb-7 tracking-wide">
          Every count is a tiny victory
        </p>

        <div className="w-14 h-1 bg-gradient-to-r from-pink-400 to-violet-400 rounded-full mx-auto my-4" />

        <Counter count={count} onAdd={addValue} onRemove={removeValue} />

        <button
          className="mt-5 bg-transparent text-violet-700 border-2 border-violet-300 rounded-full px-7 py-2.5 font-semibold text-sm cursor-pointer transition-all hover:bg-violet-100 hover:border-violet-500 hover:-translate-y-0.5"
          onClick={resetValue}
        >
          Reset
        </button>

        <p className="mt-5 text-xs text-purple-300 italic">
          {count > 10
            ? "Wow, you're on fire!"
            : count > 0
            ? `You've counted ${count} time${count !== 1 ? 's' : ''}`
            : count < 0
            ? `${Math.abs(count)} below zero!`
            : 'Start counting!'}
        </p>
      </div>
    </div>
  );
};

export default App;
