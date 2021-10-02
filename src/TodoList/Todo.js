
import { Button } from 'reactstrap';
import './Todo.css'

function Todo({ id, todo, remove, isCompleted }) {
    const handleDelete = () => remove(id);
    return (
        <div className="Todo">
            <li style={{ textDecoration: todo.isCompleted ? 'line-through' : "" }}>
                {todo}
                <Button className='Todo-btn' size='sm' color='success' onClick={() => isCompleted(id)}>Complete</Button>
                <Button size='sm' color='danger' onClick={handleDelete}>Remove</Button>
            </li>
        </div>
    )
}



export default Todo