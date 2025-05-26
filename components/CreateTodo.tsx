import { type TodoTitle } from "../src/types";
import React, { useState } from "react";

interface Props {
    saveTodo: (todo: TodoTitle) => void;
}

export const CreateTodo: React.FC<Props> = ({ saveTodo }) => {
    const [inputValue, setInputValue] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
            saveTodo({ title: inputValue });
            setInputValue('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="¿Que quieres hacer?"
                />
                </form>
    );
};