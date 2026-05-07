import { useState } from "react";
import { useTodo } from "../context/TodoContext";

const categories = [
  { id: "shopping",  emoji: "🛍️", label: "Shopping"  },
  { id: "selfcare",  emoji: "🌸", label: "Self Care"  },
  { id: "study",     emoji: "📚", label: "Study"      },
  { id: "health",    emoji: "💪", label: "Health"     },
  { id: "food",      emoji: "🍰", label: "Foodie"     },
  { id: "social",    emoji: "💌", label: "Social"     },
  { id: "fashion",   emoji: "👗", label: "Fashion"    },
  { id: "skincare",  emoji: "🧴", label: "Skincare"   },
  { id: "travel",    emoji: "✈️", label: "Travel"     },
  { id: "other",     emoji: "✨", label: "Other"      },
];

function TodoForm() {
  const [todoText, setTodoText] = useState("");
  const [category, setCategory] = useState("other");
  const { addTodo } = useTodo();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!todoText.trim()) return;
    addTodo({ todo: todoText.trim(), completed: false, category });
    setTodoText("");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Label */}
      <label className="block text-sm font-bold text-pink-500 mb-1">
        🐾 what do you need to do?
      </label>

      {/* Input row */}
      <div className="flex gap-2">
        <input
          type="text"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
          placeholder="e.g. buy cute stickers 🎀"
          className="flex-1 px-4 py-3 rounded-2xl border-2 border-pink-200 bg-pink-50/60 text-pink-800 placeholder-pink-300 focus:outline-none focus:border-pink-400 focus:bg-white transition-all text-sm font-semibold"
        />
        <button
          type="submit"
          className="px-5 py-3 rounded-2xl font-extrabold text-white text-sm transition-all active:scale-90 hover:shadow-lg hover:shadow-pink-300/60 hover:brightness-110"
          style={{ background: "linear-gradient(135deg, #f472b6, #c084fc)" }}
        >
          Add 🐱
        </button>
      </div>

      {/* Category chips */}
      <div>
        <p className="text-xs font-bold text-pink-400 mb-2">category</p>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setCategory(cat.id)}
              className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all ${
                category === cat.id
                  ? "text-white shadow-md scale-105"
                  : "bg-pink-50 text-pink-400 border border-pink-200 hover:bg-pink-100"
              }`}
              style={
                category === cat.id
                  ? { background: "linear-gradient(135deg, #f472b6, #c084fc)" }
                  : {}
              }
            >
              {cat.emoji} {cat.label}
            </button>
          ))}
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
