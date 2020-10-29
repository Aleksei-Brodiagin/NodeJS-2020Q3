const router = require('express').Router();
const checkUser = require('./login.DB.repository');

router.route('/').post(async (req, res, next) => {
  try {
    const login = req.body.login;
    const password = req.body.password;
    const token = await checkUser(login, password);
    return res.json({ token });
  } catch (err) {
    res.status(403).send('Forbidden');
    return next(err);
  }
});

module.exports = router;
