
import './styleGeneral/app.css';
import React, { useState } from 'react';
import {TaskManager} from './Components/taskManagerCompo/TaskManager';

function App() {
  return (
    <div className="App">
      <h1>Gestor de Tareas</h1>
      <TaskManager />
    </div>
  );
}

export default App;
