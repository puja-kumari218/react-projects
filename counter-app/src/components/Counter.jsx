import React from "react";

const Counter = ({ count, onAdd, onRemove }) => {
  return (
    <div>
      <div className="text-[5.5rem] font-bold bg-gradient-to-br from-pink-500 to-violet-600 bg-clip-text text-transparent text-center leading-none my-5 -tracking-[2px]">
        {count}
      </div>

      <div className="flex gap-4 justify-center mt-3">
        <button
          className="bg-gradient-to-br from-orange-400 to-red-500 text-white rounded-full px-8 py-3 font-semibold text-sm cursor-pointer transition-all hover:-translate-y-1 shadow-lg"
          onClick={onRemove}
        >
          - Remove
        </button>
        <button
          className="bg-gradient-to-br from-pink-400 to-violet-400 text-white rounded-full px-8 py-3 font-semibold text-sm cursor-pointer transition-all hover:-translate-y-1 shadow-lg"
          onClick={onAdd}
        >
          + Add
        </button>
      </div>
    </div>
  );
};

export default Counter;
