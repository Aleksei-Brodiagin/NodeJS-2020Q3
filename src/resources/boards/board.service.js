const boardsRepo = require('./board.DB.repository');

const create = board => boardsRepo.create(board);

const deleteBoard = id => boardsRepo.deleteBoard(id);

const update = (boardID, board) => boardsRepo.update(boardID, board);

const getAll = () => boardsRepo.getAll();

const get = id => boardsRepo.get(id);

module.exports = { create, deleteBoard, update, getAll, get };
