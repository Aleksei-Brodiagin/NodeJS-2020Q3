const jwt = require('jsonwebtoken');
const { JWT_SECRET_KEY } = require('./common/config');

const auth = (req, res, next) => {
  if (req.method === 'OPTIONS') {
    return next();
  }
  try {
    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
      return res.sendStatus(401);
    }
    const decoded = jwt.verify(token, JWT_SECRET_KEY);
    req.user = decoded;
  } catch (e) {
    res.sendStatus(401);
    return;
  }
  next();
};

module.exports = auth;
