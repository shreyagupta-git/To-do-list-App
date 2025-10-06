import React, { useState } from "react";

import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleAddTask = () => {
    if (task.trim() !== "") {
      setTasks([...tasks, task]);
      setTask("");
    }
  };
  const handleDeleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") handleAddTask();
  };
  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="input-section">
        <input
          type="text"
          placeholder="Add your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button className="add-btn" onClick={handleAddTask}>Add</button>
      </div>

    <div className="task-list">
        {tasks.map((t, index) => (
          <div key={index} className="task-item">
            <span>{t}</span>
            <button className="delete-btn" onClick={() => handleDeleteTask(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
