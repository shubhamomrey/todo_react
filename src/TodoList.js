import React, { useState } from 'react';
import './App.css';

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleTaskChange = (event) => setNewTask(event.target.value);

  const handleTaskAdd = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, newTask]);
    setNewTask('');
  };

  const handleTaskDelete = (taskIndex) => setTasks(tasks.filter((_, index) => index !== taskIndex));

  return (
    <div>
      <div className='name'>
      <h1>To-Do List</h1>
      <div>
        <input type="text" value={newTask} onChange={handleTaskChange} />
        <button onClick={handleTaskAdd} style={{marginLeft:10}}>Add Task</button>
      </div>
      </div>
      <div className='list'>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} style={{marginTop:10}}>
            {task}
            <button onClick={() => handleTaskDelete(index)} style={{marginLeft:10}}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default TodoList;