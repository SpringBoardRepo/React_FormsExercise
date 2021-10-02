
import { useState } from 'react'

import Todo from './Todo'
import NewTodoForm from './NewTodoForm';


function TodoList() {
    const [todoList, setTodoList] = useState([]);

    const addNewTodo = (newList) => {
        setTodoList(todoList => [...todoList, newList])
    }

    const handleRemove = (id) => {
        setTodoList(todoList => todoList.filter(task => task.id !== id))
    }

    const handleComplete = (id) => {
        setTodoList(todoList => todoList.map(task => task.id === id ? { ...task, done: !task.done } : task));
    }

    const todoComponents = todoList.map(task => (
        < Todo
            key={task.id}
            id={task.id}
            text={task.text}
            done={task.done}
            remove={handleRemove}
            isCompleted={handleComplete}
        />
    ));

    return (
        <div>
            <NewTodoForm addNewTodo={addNewTodo} />
            <ul>{todoComponents}</ul>
        </div>
    )
}

export default TodoList;