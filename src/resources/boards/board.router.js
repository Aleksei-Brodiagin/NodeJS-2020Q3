const router = require('express').Router();
const Board = require('./board.model');
const boardsService = require('./board.service');

router.route('/').post(async (req, res) => {
  const board = await boardsService.create(
    new Board({
      title: req.body.title,
      columns: req.body.columns
    })
  );
  res.json(board);
});

router.route('/:id').delete(async (req, res) => {
  await boardsService.deleteBoard(req.params.id);
  res.status('204').send('The board has been deleted');
});

router.route('/:id').put(async (req, res) => {
  const board = await boardsService.update(req.params.id, req.body);
  res.json(board);
});

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAll();
  if (!boards) res.status('404');
  res.json(boards);
});

router.route('/:id').get(async (req, res) => {
  const board = await boardsService.get(req.params.id);
  if (!board) res.status('404');
  res.json(board);
});

module.exports = router;
