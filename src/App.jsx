import { useState } from 'react'
import './App.css'
import TodoList from './Components/Todolist'

function App() {
  return (
    <div className="flex flex-col justify-center items-center text-gray-100 ">
      <h1 className='text-black font-extrabold  border-blue-100 text-2xl mb-5'>Gestionnaire des Taches</h1>
      <TodoList/>
    </div>
  )
}

export default App
