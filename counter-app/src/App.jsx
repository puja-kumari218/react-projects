import React, { useState } from 'react'
import Counter from './components/Counter'

const App = () => {
  const [count, setCount] = useState(0);
  const addValue = () =>{
    setCount(count+1);
  }
  const removeValue = () =>{
    setCount(count-1)
  }
  return (
    <div>
      <h1 className='text-amber-300'>Counter app</h1>
      <Counter count={count} onAdd={addValue} onRemove={removeValue}/>
    </div>
  ) 
}

export default App

// another way

// import React from 'react'
// import { useState } from 'react'

// const App = () => {
//   const [count, setCount] = useState(0);
//   const updateVale = (value) =>{
//     if(value>0){
//       setCount(count+1);
//     }else
//       setCount(count -1);
//   }

//   return (
//     <div>
//       <h1>value:{count}</h1>
//       <button onClick={() => updateVale(1)}>Add value</button>
//       <button onClick={() => updateVale(-1)}>remove</button>
//     </div>
//   )
// }

// export default App
