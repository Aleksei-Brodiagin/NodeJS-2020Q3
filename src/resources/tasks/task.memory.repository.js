const DB = require('../../common/inMemoryDB');

const create = async task => {
  DB.tasks.push(task);
  return DB.tasks.filter(el => el.id === task.id)[0];
};

const deleteTask = async (boardId, taskId) => {
  const use = DB.tasks.findIndex(
    el => el.id === taskId && el.boardId === boardId
  );
  DB.tasks.splice(use, 1);
};

const get = async (boardId, taskId) =>
  DB.tasks.filter(el => el.id === taskId && el.boardId === boardId)[0];

const getAll = async boardId => DB.tasks.filter(el => el.boardId === boardId);

const update = async (boardId, taskId, task) => {
  const use = DB.tasks.find(el => el.boardId === boardId && el.id === taskId);
  use.title = task.title;
  use.order = task.order;
  use.description = task.description;
  use.userId = task.userId;
  use.boardId = task.boardId;
  use.columnId = task.columnId;
  return DB.tasks.filter(el => el.id === taskId && el.boardId === boardId)[0];
};

module.exports = { create, deleteTask, get, getAll, update };
