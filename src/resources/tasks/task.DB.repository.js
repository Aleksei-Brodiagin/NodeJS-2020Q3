const { Task } = require('./task.model');

const create = async (boardId, task) => {
  const rez = { ...task, boardId };
  return await Task.create(rez);
};

const deleteTask = async (boardId, taskId) => Task.deleteOne({ _id: taskId });

const getAll = async () => await Task.find({});

const get = async (boardId, taskId) => {
  return await Task.findById(taskId);
};

const update = async (boardId, taskId, task) => {
  return await Task.updateOne({ _id: taskId }, task);
};

module.exports = { create, deleteTask, get, getAll, update };
