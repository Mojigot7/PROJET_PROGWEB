const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://mongo:27017/tasks', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Task schema
const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  dueDate: Date,
  assignedTo: String,
  status: String,
});

// Define Task model
const Task = mongoose.model('Task', taskSchema);

// Define routes
app.get('/tasks', async (req, res) => {
  const tasks = await Task.find();
  res.json(tasks);
});

app.post('/tasks', async (req, res) => {
  const task = new Task(req.body);
  await task.save();
  res.status(201).json(task);
});

// Start server
app.listen(port, () => {
  console.log(`Back-end server running at http://localhost:${port}`);
});