import { useState } from "react";

function TodoList() {
    const [taskList, setTaskList] = useState([])
    const todolist = [...taskList]
    const [todoTitle, setTodoTitle] = useState('')
    const [valueUpdate, setValueUpdate] = useState('')
    const [isFormUpdate, setIsFormUpdate] = useState(false)
    const [position,setPosition] = useState();

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
            <input type='text' value={todoTitle} placeholder="Add Task" onChange={(e) => handleChangeTodoTitle(e.target.value)} />
            <button type="button" onClick={() => { addTodo(todoTitle); }} >Ajouter</button>


            {taskList.map((todo, index) =>
                <div key={index}>
                    <p>{index + 1}. {todo}</p>
                    <button onClick={() => deleteTask(index)}>Supprimer</button>
                    <button onClick={() => {setIsFormUpdate(true);setPosition(index)}}>Modifier</button>

                    {
                        isFormUpdate && index===position && <>
                            <input type='text' value={valueUpdate} placeholder={todo} onChange={(e) => setValueUpdate(e.target.value)} />
                            <button type="button" onClick={() => {upDateTask(index, valueUpdate);setIsFormUpdate(false)}} >Modifier</button>
                        </>
                    }
                </div>
            )}

        </div>
    )
}

export default TodoList
