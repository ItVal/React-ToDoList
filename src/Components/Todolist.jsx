import { useState } from "react";
import '../Components/toDoList.css'

function TodoList() {
    const [taskList, setTaskList] = useState([])
    const todolist = [...taskList]
    const [todoTitle, setTodoTitle] = useState('')
    const [valueUpdate, setValueUpdate] = useState('')
    const [isFormUpdate, setIsFormUpdate] = useState(false)

    const addTodo = (title) => {

        todolist.push(title)
        setTaskList(todolist)
    }

    const handleChangeTodoTitle = (value) => {
        setTodoTitle(value)
    }

    const deleteTask = (index) => {
        todolist.splice(index, 1)
        setTaskList(todolist)
    }

    const upDateTask = (index, value) => {
        todolist.splice(index, 1, value)
        setTaskList(todolist)
    }

    return (
        <div>
            <input type='text' value={todoTitle} placeholder="Add Task" onChange={(e) => handleChangeTodoTitle(e.target.value)} className='inputText' />
            <button type="button" onClick={() => { addTodo(todoTitle); }} className='btnAjouter' >Ajouter</button>


            {taskList.map((todo, index) =>
                <div key={index}>
                    <p>{index + 1}. {todo}</p>
                    <button onClick={() => deleteTask(index)} className='btnSupprimer'>Supprimer</button>
                    <button onClick={() => setIsFormUpdate(true)} className='btnModifier'>Modifier</button>

                    {
                        isFormUpdate && <>
                            <input type='text' value={valueUpdate} placeholder="Add Task" onChange={(e) => setValueUpdate(e.target.value)} />
                            <button type="button" onClick={() => upDateTask(index, valueUpdate)} className='btnModifier'>Modifier</button>
                        </>
                    }
                </div>
            )}

        </div>
    )
}

export default TodoList
