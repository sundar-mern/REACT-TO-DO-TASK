// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './App';


function TodoApp() {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const addTask = () => {
    if (taskName.trim() !== '') {
      setTasks([...tasks, { name: taskName, description: taskDescription, status: 'not-completed' }]);
      setTaskName('');
      setTaskDescription('');
    }
  };

  const toggleTaskStatus = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].status = updatedTasks[index].status === 'not-completed' ? 'completed' : 'not-completed';
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter((task) => {
    if (statusFilter === 'all') return true;
    return task.status === statusFilter;
  });

  return (
    <div>
      <h1>TO DO TASK </h1>
      <div>
        <input
          type="text"
          placeholder="Task Name"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className="filter-container">
      <label htmlFor="status-filter"><h4>Filter by Status:</h4></label>
      </div>
      <select
        id="status-filter"
        value={statusFilter}
        onChange={(e) => setStatusFilter(e.target.value)}
      >
        <option value="all">All</option>
        <option value="completed">Completed</option>
        <option value="not-completed">Not Completed</option>
      </select>
      <div>
        {filteredTasks.map((task, index) => (
          <div key={index} className="task-card">
            <h2>{task.name}</h2>
            <p>{task.description}</p>
            <button onClick={() => toggleTaskStatus(index)}>
              {task.status === 'completed' ? 'Not Completed' : 'Completed'}
            </button>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoApp;
