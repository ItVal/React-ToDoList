import { useState } from 'react'
import TodoList from "./Components/Todolist";
import './App.css'
import Todolist from './Components/Todolist'

function App() {
  const [count, setCount] = useState(0)

  return (

 <div className="flex flex-col justify-center items-center text-gray-100 ">
      <h1 className='text-red-400 font-bold  border-blue-100 text-2xl'>Gestionnaire des Taches</h1>
      <TodoList/>
    </div>
  )
}

export default App
