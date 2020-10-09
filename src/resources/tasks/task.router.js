const router = require('express').Router({ mergeParams: true });
const Task = require('./task.model');
const tasksService = require('./task.service');

router.route('/').post(async (req, res) => {
  const task = await tasksService.create(
    new Task({
      title: req.body.title,
      order: req.body.columns,
      description: req.body.description,
      userId: req.body.userId,
      boardId: req.params.boardId,
      columnId: req.body.columnId
    })
  );
  res.json(task);
});

router.route('/:id').delete(async (req, res) => {
  await tasksService.deleteTask(req.params.boardId, req.params.id);
  res.status('204').send('The board has been deleted');
});

router.route('/:id').get(async (req, res) => {
  const task = await tasksService.get(req.params.boardId, req.params.id);
  if (!task) res.status('404');
  res.json(task);
});

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAll(req.params.boardId);
  if (!tasks) res.status('404');
  res.json(tasks);
});

router.route('/:id').put(async (req, res) => {
  const task = await tasksService.update(
    req.params.boardId,
    req.params.id,
    req.body
  );
  res.json(task);
});

module.exports = router;
