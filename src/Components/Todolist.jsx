import { useState } from "react";
import { FaPlus, FaEdit } from 'react-icons/fa';
import { MdDelete } from 'react-icons/md'

function TodoList() {
    const [taskList, setTaskList] = useState([])
    const todolist = [...taskList]
    const [todoTitle, setTodoTitle] = useState('')
    const [valueUpdate, setValueUpdate] = useState('')
    const [isFormUpdate, setIsFormUpdate] = useState(false)
    const [numero, setNumero] = useState();

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
        setIsFormUpdate(false)
        setValueUpdate('')
    }

    return (

        <div className="bg-blue-600 w-3/6 rounded-sm shadow-lg">

            <input type='text' value={todoTitle} placeholder="Nouvelle Tache" onChange={(e) => handleChangeTodoTitle(e.target.value)}
                className="w-5/6 h-8 m-3 outline-none text-xl text-gray-900 rounded-sm" />
            <button type="button" onClick={() => { addTodo(todoTitle); setTodoTitle('') }} className="text-gray-100 m-3 h-5">{<FaPlus size={20} />}</button>

            <h1 className="text-red-400">Mes Taches</h1>

            {taskList.map((todo, index) =>
                <div key={index} className="gap-6 ">
                    <div className="flex justify-center gap-4 hover:bg-blue-500 mt-2 text-left">
                        <p>{index + 1}. {todo}</p>
                        <button onClick={() => deleteTask(index)}>{<MdDelete />}</button>
                        <button onClick={() => { setIsFormUpdate(true); setNumero(index) }}>{<FaEdit />}</button>
                    </div>
                    <hr />
                    {
                        isFormUpdate && index === numero &&
                        <div>
                            <input type='text' value={valueUpdate} placeholder="modifier votre tâche" onChange={(e) => setValueUpdate(e.target.value)} className="w-5/6 h-8 m-3 outline-none  text-gray-900" />
                            <button type="button" onClick={() => upDateTask(index, valueUpdate)} className="text-gray-100 m-3 h-5">{<FaEdit />}</button>
                        </div>

                    }
                </div>
            )}

        </div>
    )
}

export default TodoList
