const DB = require('../../common/inMemoryDB');

const getAll = async () => DB.users;

const get = async id => DB.users.filter(el => el.id === id)[0];

const create = async user => {
  DB.users.push(user);
  return get(user.id);
};

const update = async (userID, user) => {
  const use = DB.users.find(el => el.id === userID);
  use.name = user.name;
  use.login = user.login;
  use.password = user.password;
  return get(userID);
};

const deleteUser = async id => {
  const use = DB.users.findIndex(el => el.id === id);
  DB.users.splice(use, 1);
  while (DB.tasks.findIndex(el => el.userId === id) !== -1) {
    const ind = DB.tasks.findIndex(el => el.userId === id);
    DB.tasks[ind].userId = null;
  }
};

module.exports = { getAll, get, create, update, deleteUser };
