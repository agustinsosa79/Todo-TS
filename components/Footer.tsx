    import type { FilterValue} from "../src/types"
    import { Filters } from "./filters"

    interface Props {
        activeCount?: number
        completedCount?: number
        filterSelected: FilterValue,
        onClearCompleted: () => void
        onFilterChange: (filter: FilterValue) => void
    }

    export const Footer: React.FC<Props> = (
        {activeCount = 0,
        completedCount = 0,
        filterSelected,
        onFilterChange,
        onClearCompleted}) => {
        return (
            <footer className="footer">

        <span className="todo-count">
            <strong>{activeCount}</strong> pendientes
        </span>

        <Filters filterSelected={filterSelected} onFilterChange={onFilterChange} />

        {
            completedCount > 0 && (
            <button
                className="clear-completed"
                onClick={onClearCompleted}>
                Borrar completados
            </button>
            )
        }
        </footer>
        )
    }