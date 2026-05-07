import { useState, useEffect,useRef, useCallback} from 'react'

import './index.css'

function App() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `Clicked : ${count}times`;
  },[count]);
  const inputRef = useRef(null);
  const handleClick = useCallback(() =>{
    setCount(count+1)
  },[count])
  const focusInput = () =>{
    inputRef.current.focus();
  }
  return (
    <>
      <button onClick={() => setCount(count+1)}>{count}

      </button>
      <input ref={inputRef}  type='text' placeholder='Type here...'/>
      <button onClick={focusInput}>Focus Input</button>
      <button onClick={handleClick}>hiii</button>
    </>
  )
}

export default App
