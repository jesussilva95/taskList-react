

import React, { useState } from 'react';
import { CompletedTasks } from '../completedTaksCompo/CompletedTask';
import { AddTask } from '../addTaskCompo/AddTask';
import { ListTask } from '../listTaskCompo/ListTask';

export const TaskManager = () =>{
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <AddTask addTask={addTask} />
      <ListTask tasks={tasks} toggleTaskCompletion={toggleTaskCompletion} deleteTask={deleteTask} />
      <CompletedTasks tasks={tasks.filter(task => task.completed)} />
    </div>
  );
}


