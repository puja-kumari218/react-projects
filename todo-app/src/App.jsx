import { useState, useEffect} from 'react'
import './index.css' 
import { TodoProvider } from './context/TodoContext'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todo, setTodos] = useState([]);
  const addTodo = (todo) =>{
    setTodos((prev) => [{id:Date.now(),...todo}, ...prev]);
  };
  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id ===id?todo:prevTodo)));
  };
  const deleteTodo= (id) =>{
    setTodos((prev)=> prev.filter((todo) => todo.id !==id));
  };
  const toggleCompleted =(id) =>{
    setTodos((prev)=>
      prev.map((prevTodo) =>
        prevTodo.id===id?{...prevTodo.completed}:prevTodo
      )
    )
  }
  useEffect(() =>{
    const todo = JSON.parse(localStorage.getItem("todo"));
    if (todo && todo.length>0) {
       setTodos(todo);
    }},[]);
    useEffect(()=> {
      localStorage.setItem("todo", JSON.stringify(todo));
    },[todo])
  

  return (
   <TodoProvider value={{todo, addTodo, updateTodo, deleteTodo, toggleCompleted}}>
    <div className='bg-amber-500 min-h-screen py-8' >
      <div className='w-full max-w-2xl max-auto shadow-emerald-200 rounded-lg px-4 py-3 text-amber-600'>
        <h1 className=''></h1>
      </div>

    </div>

   </TodoProvider>
  )
}

export default App
