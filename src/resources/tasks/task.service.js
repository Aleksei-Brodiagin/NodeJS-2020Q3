const tasksRepo = require('./task.DB.repository');

const create = (boardId, task) => tasksRepo.create(boardId, task);

const deleteTask = (boardId, taskId) => tasksRepo.deleteTask(boardId, taskId);

const get = (boardId, taskId) => tasksRepo.get(boardId, taskId);

const getAll = () => tasksRepo.getAll();

const update = (boardID, taskId, task) =>
  tasksRepo.update(boardID, taskId, task);

module.exports = { create, deleteTask, get, getAll, update };
