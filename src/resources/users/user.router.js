const router = require('express').Router();
const { toResponse } = require('./user.model');
const usersService = require('./user.service');

// Uncomment the string below for check error handler

// router.route('/').get(async (req, res, next) => {
//   try {
//     throw new Error ('BROKEN');
//   } catch(err) {
//     next(err);
//   }
// });

router.route('/').get(async (req, res, next) => {
  try {
    const users = await usersService.getAll();
    res.json(users.map(toResponse));
  } catch (err) {
    return next(err);
  }
});

router.route('/').post(async (req, res, next) => {
  try {
    const user = await usersService.create(req.body);
    res.json(toResponse(user));
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').get(async (req, res, next) => {
  try {
    const user = await usersService.get(req.params.id);
    res.json(toResponse(user));
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').delete(async (req, res, next) => {
  try {
    await usersService.deleteUser(req.params.id);
    res.status('204').send('The user has been deleted');
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').put(async (req, res, next) => {
  try {
    const user = await usersService.update(req.params.id, req.body);
    res.json(toResponse(user));
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
