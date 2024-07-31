const Task = require('../models/Task');
const asyncWrapper = require('../middleware/asyncWrapper');

const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({});
  res.send({ tasks });
});

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body);
  res.send({ task });
});

const getTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOne({ _id: id });

  if (!task) {
    return res.status(404).send({ message: `No task with ID: ${id}` });
  }

  res.send({ task });
});

const updateTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByIdAndUpdate({ _id: id }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!task) {
    return res.status(404).send({ message: `No task with ID: ${id}` });
  }

  res.send({ task });
});

const deleteTask = asyncWrapper(async (req, res) => {
  const { id } = req.params;
  const task = await Task.findOneAndDelete({ _id: id });

  if (!task) {
    return res.status(404).send({ message: `No task with ID: ${id}` });
  }

  res.send({ task });
});

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
