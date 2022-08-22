import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import TodoList from './Components/Todolist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <TodoList />
    </div>
  )
}

export default App
