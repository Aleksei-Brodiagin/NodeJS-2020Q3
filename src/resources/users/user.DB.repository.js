const { User } = require('./user.model');
const { Task } = require('../tasks/task.model');

const getAll = async () => {
  return await User.find({});
};

const create = async user => {
  return await User.create(user);
};

const get = async id => await User.findById(id);

const deleteUser = async id => {
  await Task.updateMany({ userId: id }, { $set: { userId: null } });
  await User.deleteOne({ _id: id });
};

const update = async (userID, user) => {
  return await User.updateOne({ _id: userID }, user);
};

module.exports = { getAll, get, create, update, deleteUser };
