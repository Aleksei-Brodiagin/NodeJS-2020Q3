const usersRepo = require('./user.memory.repository');

const getAll = async () => usersRepo.getAll();

const get = async id => usersRepo.get(id);

const create = async user => usersRepo.create(user);

const update = async (userID, user) => usersRepo.update(userID, user);

const deleteUser = async id => usersRepo.deleteUser(id);

module.exports = { getAll, get, create, update, deleteUser };
