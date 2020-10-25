const router = require('express').Router();
const { toResponse } = require('./board.model');
const boardsService = require('./board.service');

router.route('/').post(async (req, res, next) => {
  try {
    const board = await boardsService.create(req.body);
    res.json(toResponse(board));
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').delete(async (req, res, next) => {
  try {
    await boardsService.deleteBoard(req.params.id);
    res.status('204').send('The board has been deleted');
  } catch (err) {
    return next(err);
  }
});

router.route('/').get(async (req, res, next) => {
  try {
    const boards = await boardsService.getAll();
    if (!boards) res.status('404');
    res.json(boards.map(toResponse));
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').get(async (req, res, next) => {
  try {
    const board = await boardsService.get(req.params.id);
    if (!board) res.status('404');
    res.json(toResponse(board));
  } catch (err) {
    return next(err);
  }
});

router.route('/:id').put(async (req, res, next) => {
  try {
    const board = await boardsService.update(req.params.id, req.body);
    res.json(toResponse(board));
  } catch (err) {
    return next(err);
  }
});

module.exports = router;
