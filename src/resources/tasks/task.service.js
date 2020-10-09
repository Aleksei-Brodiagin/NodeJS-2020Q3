const tasksRepo = require('./task.memory.repository');

const create = async task => tasksRepo.create(task);

const deleteTask = async (boardId, taskId) =>
  tasksRepo.deleteTask(boardId, taskId);

const get = async (boardId, taskId) => tasksRepo.get(boardId, taskId);

const getAll = async boardId => tasksRepo.getAll(boardId);

const update = async (boardID, taskId, task) =>
  tasksRepo.update(boardID, taskId, task);

module.exports = { create, deleteTask, get, getAll, update };
