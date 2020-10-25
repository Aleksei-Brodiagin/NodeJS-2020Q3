const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
  {
    name: String,
    password: String,
    login: String
  },
  { collection: 'users' }
);

const toResponse = user => {
  const { id, name, login } = user;
  return { id, name, login };
};

module.exports = {
  User: mongoose.model('users', User),
  toResponse
};
