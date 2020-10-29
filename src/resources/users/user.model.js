const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = new Schema(
  {
    name: String,
    password: String,
    login: String
  },
  { collection: 'users' }
);

User.pre('save', async function a() {
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

User.methods.token = function b() {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY);
};

User.methods.checkPass = async function c(pass) {
  return await bcrypt.compare(pass, this.password);
};

const toResponse = user => {
  const { id, name, login } = user;
  return { id, name, login };
};

module.exports = {
  User: mongoose.model('users', User),
  toResponse
};
