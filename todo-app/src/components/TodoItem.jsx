import { useState } from "react";
import { useTodo } from "../context/TodoContext";

const categoryStyles = {
  shopping: { emoji: "🛍️", bg: "#fce7f3", border: "#f9a8d4" },
  selfcare:  { emoji: "🌸", bg: "#fdf4ff", border: "#e879f9" },
  study:     { emoji: "📚", bg: "#eff6ff", border: "#93c5fd" },
  health:    { emoji: "💪", bg: "#f0fdf4", border: "#86efac" },
  food:      { emoji: "🍰", bg: "#fff7ed", border: "#fdba74" },
  social:    { emoji: "💌", bg: "#fff1f2", border: "#fda4af" },
  fashion:   { emoji: "👗", bg: "#fdf4ff", border: "#d8b4fe" },
  skincare:  { emoji: "🧴", bg: "#ecfdf5", border: "#6ee7b7" },
  travel:    { emoji: "✈️", bg: "#f0f9ff", border: "#7dd3fc" },
  other:     { emoji: "✨", bg: "#fefce8", border: "#fde047" },
};

function TodoItem({ Todo }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText]   = useState(Todo.todo);
  const { updateTodo, deleteTodo, toggleCompleted } = useTodo();

  const style = categoryStyles[Todo.category] || categoryStyles.other;

  const handleEdit = () => {
    if (isEditing) {
      if (editText.trim()) {
        updateTodo(Todo.id, { ...Todo, todo: editText.trim() });
      } else {
        setEditText(Todo.todo);
      }
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  return (
    <div
      className="todo-card rounded-2xl px-4 py-3 border-2 flex items-center gap-3"
      style={{ backgroundColor: style.bg, borderColor: style.border }}
    >
      {/* Category emoji */}
      <span className="text-xl flex-shrink-0 select-none">{style.emoji}</span>

      {/* Checkbox */}
      <button
        onClick={() => toggleCompleted(Todo.id)}
        className={`w-6 h-6 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-all duration-200 ${
          Todo.completed
            ? "border-pink-400 scale-110"
            : "border-pink-300 hover:border-pink-500"
        }`}
        style={
          Todo.completed
            ? { background: "linear-gradient(135deg, #f472b6, #c084fc)" }
            : {}
        }
        title={Todo.completed ? "Mark undone" : "Mark done"}
      >
        {Todo.completed && (
          <span className="text-white text-xs font-bold">✓</span>
        )}
      </button>

      {/* Text / Edit input */}
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleEdit();
            if (e.key === "Escape") { setEditText(Todo.todo); setIsEditing(false); }
          }}
          autoFocus
          className="flex-1 bg-white/80 px-3 py-1 rounded-xl border-2 border-pink-300 focus:outline-none text-sm text-pink-800 font-semibold"
        />
      ) : (
        <span
          className={`flex-1 text-sm font-semibold transition-all duration-300 ${
            Todo.completed ? "line-through text-pink-300" : "text-pink-800"
          }`}
        >
          {Todo.todo}
        </span>
      )}

      {/* Completed badge */}
      {Todo.completed && !isEditing && (
        <span className="text-xs bg-white/60 text-pink-400 px-2 py-0.5 rounded-full font-bold flex-shrink-0 hidden sm:block">
          done 🎀
        </span>
      )}

      {/* Action buttons */}
      <div className="flex gap-1.5 flex-shrink-0">
        <button
          onClick={handleEdit}
          disabled={Todo.completed}
          className="w-8 h-8 rounded-xl flex items-center justify-center text-base bg-white/60 hover:bg-white transition-all hover:scale-110 disabled:opacity-40 disabled:cursor-not-allowed"
          title={isEditing ? "Save" : "Edit"}
        >
          {isEditing ? "💾" : "✏️"}
        </button>
        <button
          onClick={() => deleteTodo(Todo.id)}
          className="w-8 h-8 rounded-xl flex items-center justify-center text-base bg-white/60 hover:bg-red-50 transition-all hover:scale-110"
          title="Delete"
        >
          🗑️
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
