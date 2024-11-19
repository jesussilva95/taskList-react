

import React, { useState } from 'react';

export const AddTask = ({ addTask }) => {
    const [newTask, setNewTask] = useState('');

    const handleAddTask = () => {
        addTask(newTask);
        setNewTask('');
    };

    return (
            <div>
            <input
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Escribe una tarea"
            />
            <button onClick={handleAddTask}>Agregar Tarea</button>
            </div>
    );
}


