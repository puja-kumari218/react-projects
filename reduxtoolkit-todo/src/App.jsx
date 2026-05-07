import React from 'react';
import './index.css';
import AddTodo from './components/AddTodo'; // Import AddTodo component
import Todos from './components/Todo'; // Import Todos component
function App() {
 return (
 <>
 <h1>React-Redux Toolkit</h1>
 <AddTodo /> {/* Render AddTodo component */}
 <Todos /> {/* Render Todos component */}
 </>
 );
}
export default App;