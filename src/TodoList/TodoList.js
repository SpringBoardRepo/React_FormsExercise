
import { useState } from 'react'

import Todo from './Todo'
import NewTodoForm from './NewTodoForm';


function TodoList() {
    const [todoList, setTodoList] = useState([]);

    const addNewTodo = (newList) => {

        setTodoList(todoList => [...todoList, newList])
    }
    const handleRemove = (id) => {
        setTodoList(todoList => todoList.filter(t => t.id !== id))
    }

    const handleComplete = (id) => {
        setTodoList(todoList => todoList.map(t => t.id === id ? { ...t, isCompleted: true } : t));

    }

    const todoComponents = todoList.map(t => (
        < Todo
            key={t.id}
            id={t.id}
            todo={t.text}
            remove={handleRemove}
            isCompleted={handleComplete}
        />
    ))
    return (
        <div>
            <NewTodoForm addNewTodo={addNewTodo} />
            <ul> {todoComponents}</ul>

        </div>
    )
}

export default TodoList;