const usersRepo = require('./user.DB.repository');

const getAll = () => usersRepo.getAll();

const get = id => usersRepo.get(id);

const create = user => usersRepo.create(user);

const update = (userID, user) => usersRepo.update(userID, user);

const deleteUser = id => usersRepo.deleteUser(id);

module.exports = { getAll, get, create, update, deleteUser };
