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
const getTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOne({ _id: id });

    if (!task) {
      return res.status(404).send({ message: `No task with ID: ${id}` });
    }

    res.send({ task });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

const updateTask = (req, res) => {
  res.json({ id: req.params.id });
};

const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findOneAndDelete({ _id: id });

    if (!task) {
      return res.status(404).send({ message: `No task with ID: ${id}` });
    }

    res.send({ task });
  } catch (error) {
    res.status(500).send({ message: error.message });
  }
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
