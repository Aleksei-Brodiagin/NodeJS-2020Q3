const boardsRepo = require('./board.memory.repository');

const create = async board => boardsRepo.create(board);

const deleteBoard = async id => boardsRepo.deleteBoard(id);

const update = async (boardID, board) => boardsRepo.update(boardID, board);

const getAll = async () => boardsRepo.getAll();

const get = async id => boardsRepo.get(id);

module.exports = { create, deleteBoard, update, getAll, get };
