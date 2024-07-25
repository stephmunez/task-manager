const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find({});
    res.send({ tasks });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.send({ task });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};
const getTask = (req, res) => {
  res.json({ id: req.params.id });
};

const updateTask = (req, res) => {
  res.json({ id: req.params.id });
};

const deleteTask = (req, res) => {
  res.json({ id: req.params.id });
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
