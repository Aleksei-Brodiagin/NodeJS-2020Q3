const { Board } = require('./board.model');
const { Task } = require('../tasks/task.model');

const create = async board => {
  return await Board.create(board);
};

const deleteBoard = async id => {
  await Task.deleteMany({ boardId: id });
  await Board.deleteOne({ _id: id });
};

const getAll = async () => await Board.find({});

const get = async id => await Board.findById(id);

const update = async (boardID, board) => {
  return await Board.updateOne({ _id: boardID }, board);
};

module.exports = { create, deleteBoard, update, getAll, get };
