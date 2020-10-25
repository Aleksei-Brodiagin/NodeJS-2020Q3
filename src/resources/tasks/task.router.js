const router = require('express').Router({ mergeParams: true });
const { toResponse } = require('./task.model');
const tasksService = require('./task.service');

router.route('/').post(async (req, res, next) => {
  try {
    const task = await tasksService.create(req.params.boardId, req.body);
    res.json(toResponse(task));
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').delete(async (req, res, next) => {
  try {
    await tasksService.deleteTask(req.params.boardId, req.params.id);
    res.status('204').send('The board has been deleted');
  } catch (err) {
    // res.status('404').send('Not found');
    return next(err);
  }
});

router.route('/:id').get(async (req, res, next) => {
  try {
    const task = await tasksService.get(req.params.boardId, req.params.id);
    if (!task) res.status('404');
    res.json(toResponse(task));
  } catch (err) {
    // return res.status('404').send('Not found');
    return next(err);
  }
});

router.route('/').get(async (req, res, next) => {
  try {
    const tasks = await tasksService.getAll();
    if (!tasks) res.status('404');
    res.json(tasks.map(toResponse));
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').put(async (req, res, next) => {
  try {
    const task = await tasksService.update(
      req.params.boardId,
      req.params.id,
      req.body
    );
    res.json(toResponse(task));
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
