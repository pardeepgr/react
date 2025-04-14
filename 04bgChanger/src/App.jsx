import { useState } from 'react'


function App() {
  const [color, setcolor] = useState("olive")

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-amber-200 px-3 py-2 rounded-3xl'>

            <button 
            onClick={() => setcolor("red")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "red"}}
            > Red </button>
            <button 
            onClick={() => setcolor("Blue")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "Blue"}}
            > Blue </button>
            <button 
            onClick={() => setcolor("White")}
            className='outline-none px-4 py-1 rounded-full text-gray-950 shadow-lg'
            style={{backgroundColor: "white"}}
            > White </button>
            <button 
            onClick={() => setcolor("Grey")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "Grey"}}
            > Grey </button>
            <button 
            onClick={() => setcolor("Yellow")}
            className='outline-none px-4 py-1 rounded-full text-Black shadow-lg'
            style={{backgroundColor: "Yellow"}}
            > Yellow </button>
            <button 
            onClick={() => setcolor("Green")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "Green"}}
            > Green </button>
            <button 
            onClick={() => setcolor("Violet")}
            className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
            style={{backgroundColor: "Violet"}}
            > Violet </button>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default App
