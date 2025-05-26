import {type TodoTitle} from '../src/types'
import { CreateTodo } from './CreateTodo';

interface Props {
    onAddTodo: ({title}: TodoTitle) => void;
}

export const Header: React.FC<Props> = ({ onAddTodo }) => {
    return (
        <header className="header">
            <h1>ToDo List</h1>
            <p>Hecho con typescript</p>

            <CreateTodo saveTodo={onAddTodo} />
        </header>
    );
}