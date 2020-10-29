const { User } = require('../users/user.model');

const checkUser = async (login, password) => {
  if (!login || !password) {
    throw new Error('Login or password incorrect');
  }

  const user = await User.findOne({ login }).select('+password');

  if (!user) {
    throw new Error('Login or password incorrect');
  }

  const pass = await user.checkPass(password);

  if (!pass) {
    throw new Error('Login or password incorrect');
  }

  const token = await user.token();
  return token;
};

module.exports = checkUser;
