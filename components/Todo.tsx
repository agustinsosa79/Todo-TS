import React from "react";

import { type TodoId, type Todo as TodoType } from '../src/types'

interface Props  extends TodoType {
    onToggleCompleted: ({id, completed}: Pick<TodoType, 'id' | 'completed'>) => void
    onRemove: ({id}: TodoId) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemove, onToggleCompleted }) => {
    return (
        <div>
            <input className="toggle" type="checkbox" checked={completed} onChange={(e) => onToggleCompleted({id, completed: e.target.checked})} />
            <label >{title}</label>
            <button className="destroy" onClick={() => onRemove({id})} />
        </div>
    )
}