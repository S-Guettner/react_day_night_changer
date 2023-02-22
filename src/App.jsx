import { useState } from 'react'



function App() {
  const [count, setCount] = useState(0)
    if(count % 2 === 0){
        return (
        <div className='border-2 border-black p-4 m-24 bg-blue-200'>
            <p className='text-center'>Es ist Tag! ☀</p>
            <button onClick={() => {setCount(count + 1)}} className='w-44 block mx-auto border-2 border-black p-1'>Wechsel zu Nacht</button>
        </div>
        )
    }else{
        return(
        <div className='border-2 border-black p-4 m-24 bg-blue-900'>
            <p className='text-center'>Es ist Nacht! 🌙</p>
            <button onClick={() => {setCount(count + 1)}} className='w-44 block mx-auto border-2 border-black p-1'>Wechsel zu Tag</button>
        </div>
        )
    }

}

export default App
