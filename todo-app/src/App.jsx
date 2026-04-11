import { useState, useEffect} from 'react'
import './index.css' 
import { TodoProvider } from './context'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])
  const addTodo = (todo) => {
    setTodos((prev) => )
  }

  return (
    <>
     <h1>this is puja</h1>
    </>
  )
}

export default App
