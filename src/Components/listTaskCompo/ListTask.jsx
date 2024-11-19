

import React from 'react';

export const ListTask = ({ tasks, toggleTaskCompletion, deleteTask }) => {
    return (
        <ul>
        {tasks.map((task, index) => (
            <li key={index} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            <span onClick={() => toggleTaskCompletion(index)}>{task.text}</span>
            <button onClick={() => deleteTask(index)}>Eliminar</button>
            </li>
        ))}
        </ul>
    );
    }