import { useState } from "react"
import { Todos } from "../components/Todos"
import { type TodoId, type Todo as TodoType, type FilterValue, type TodoTitle } from './types'
import { Footer } from "../components/footer"
import { TODO_FILTERS } from "./consts"
import { Header } from "../components/Header"
const mockTodos = [
  {
    id: '1',
    title: 'Todo 1',
    completed: false,
  }, {
    id: '2',
    title: 'Todo 2',
    completed: false,
  }, {
    id: '3',
    title: 'Todo 3',
    completed: false,
  }, {
    id: '4',
    title: 'Todo 4',
    completed: false,
  }, {
    id: '5',
    title: 'Todo 5',
    completed: false,
  },
]

const App: React.FC = () => {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<FilterValue>(TODO_FILTERS.ALL)

  const handleRemove = ({id}: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const handleComplete = ({id, completed}: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })
    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValue): void => {
    setFilterSelected(filter)
  }

  const handleRemoveAllCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const activeCount = todos.filter(todo => !todo.completed).length
  const completedCount = todos.filter(todo => todo.completed).length

  const FilteredTodos  = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return true
  })

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo: TodoType = {
      id: crypto.randomUUID(),
      title,
      completed: false,
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  return (
    <div className="todoapp">
    <Header onAddTodo={handleAddTodo} />
    <Todos 
    onToggleCompleted={handleComplete}
    onRemove={handleRemove}
    todos={FilteredTodos}
    />
    
    <Footer
      activeCount={activeCount} 
      completedCount={completedCount}
      filterSelected={filterSelected}
      onClearCompleted={handleRemoveAllCompleted}
      onFilterChange={handleFilterChange}
    /> 
  </div>

  )
}

export default App
