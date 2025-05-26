import React from "react";
import { FILTERS_BUTTONS, TODO_FILTERS } from "../src/consts.ts";     

interface Props {
    filterSelected: typeof TODO_FILTERS[keyof typeof TODO_FILTERS];
    onFilterChange: (filter: typeof TODO_FILTERS[keyof typeof TODO_FILTERS]) => void;
}

export const Filters: React.FC<Props> = ({ filterSelected, onFilterChange }) => {
    return (
        <ul className="filters">
            {Object.entries(FILTERS_BUTTONS).map(([key, { literal, href }]) => (
                <li key={key}>
                    <a
                        href={href}
                        className={filterSelected === key ? "selected" : ""}
                        onClick={(e) => { e.preventDefault(); onFilterChange(key as typeof TODO_FILTERS[keyof typeof TODO_FILTERS]) }}
                    >
                        {literal}
                    </a>
                </li>
            ))}
        </ul>
    )
}
