const DB = require('../../common/inMemoryDB');

const create = async board => {
  DB.boards.push(board);
  return DB.boards.filter(el => el.id === board.id)[0];
};

const deleteBoard = async id => {
  const use = DB.boards.findIndex(el => el.id === id);
  DB.boards.splice(use, 1);
  while (DB.tasks.findIndex(el => el.boardId === id) !== -1) {
    const ind = DB.tasks.findIndex(el => el.boardId === id);
    DB.tasks.splice(ind, 1);
  }
};

const update = async (boardID, board) => {
  const use = DB.boards.find(el => el.id === boardID);
  use.title = board.title;
  use.columns = board.columns;
  return DB.boards.filter(el => el.id === boardID)[0];
};

const getAll = async () => DB.boards;

const get = async id => DB.boards.filter(el => el.id === id)[0];

module.exports = { create, deleteBoard, update, getAll, get };
