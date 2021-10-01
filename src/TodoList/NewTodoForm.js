
import { useState } from 'react';
import { Button } from 'reactstrap';
import { v4 as uuid } from 'uuid';


function NewTodoForm({ addNewTodo }) {

    const [task, setTask] = useState({
        text: "",
        isCompleted: false
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        addNewTodo({ ...task, id: uuid() });
        setTask({ text: '' });
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setTask(task => ({
            ...task,
            [name]: value
        }))
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="task">
                    Todo
                </label>
                <input
                    id="task"
                    name="text"
                    value={task.text}
                    onChange={handleChange}
                />
                <Button size="sm" color="info"> Add new Todo!!</Button>
            </form>
        </div>
    )

}

export default NewTodoForm;