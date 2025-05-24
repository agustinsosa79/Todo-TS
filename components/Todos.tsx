import { type ListOfTodos } from '../src/types'
import { Todo } from './Todo'
import { type TodoId, type Todo as TodoType } from '../src/types'


interface Props {
    todos: ListOfTodos
    onRemove: ({id}: TodoId) => void
    onToggleCompleted: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void
}


export const Todos: React.FC<Props> = ({ todos, onRemove, onToggleCompleted }) => {
    return (
            <ul className='todo-list'>
                {todos.map(todo => (
                    <li 
                    key={todo.id} 
                    className={`${todo.completed ? 'completed' : ''}`}>
                    <span>{todo.title} {todo.completed ? "(Completed)" : ""}</span>
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        completed={todo.completed}
                        onToggleCompleted={onToggleCompleted}
                        onRemove={onRemove}
                    />
                    </li>
                ))}
            </ul>
    )
}
