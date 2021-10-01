
import { Button } from 'reactstrap';

function Todo({ id, todo, remove, isCompleted }) {
    const handleDelete = () => remove(id);
    return (
        <div>
            <li style={{ textDecoration: todo.isCompleted ? 'line-through' : "" }}>
                {todo}
                {<Button size='sm' color='success' onClick={() => isCompleted(id)}>Complete</Button>}
                <Button size='sm' color='danger' onClick={handleDelete}>Remove</Button>

            </li>
        </div>
    )
}



export default Todo