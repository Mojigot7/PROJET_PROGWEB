import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get('/tasks');
      setTasks(response.data);
    };

    fetchTasks();
  }, []);

  const createTask = async (task) => {
    const response = await axios.post('/tasks', task);
    setTasks([...tasks, response.data]);
  };

  return (
    <div>
      <h1>Tasks</h1>
      <TaskForm onCreateTask={createTask} />
      <TaskList tasks={tasks} />
    </div>
  );
}

function TaskForm({ onCreateTask }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [assignedTo, setAssignedTo] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const task = { title, description, dueDate, assignedTo, status };
    onCreateTask(task);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </label>
      <label>
        Due Date:
        <input
          type="date"
          value={dueDate}
          onChange={(event) => setDueDate(event.target.value)}
        />
      </label>
      <label>
        Assigned To:
        <input
          type="text"
          value={assignedTo}
          onChange={(event) => setAssignedTo(event.target.value)}
        />
      </label>
      <label>
        Status:
        <select value={status} onChange={(event) => setStatus(event.target.value)}>
          <option value="">--Select--</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>
      </label>
      <button type="submit">Create Task</button>
    </form>
  );
}

function TaskList({ tasks }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>
          <h2>{task.title}</h2>
          <p>{task.description}</p>
          <p>Due Date: {task.dueDate}</p>
          <p>Assigned To: {task.assignedTo}</p>
          <p>Status: {task.status}</p>
        </li>
      ))}
    </ul>
  );
}

export default App;