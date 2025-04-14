import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(15)
  
  const addValue = () => {
    if (counter < 20)
      setCounter(counter + 1)
  }

  const removeValue = () => {
    if (counter > 0)  
      setCounter(counter - 1)
  }

  return (
    <>
        
       <h2>Chai aur code | PK</h2>
       <h3>Counter Value : {counter}</h3>

       <button onClick={addValue}>Add Value {counter}</button>
       <br />
       <button onClick={removeValue} >Remove value {counter}</button>

    </>
  )
}

export default App
