const express = require('express');
const swaggerUI = require('swagger-ui-express');
const path = require('path');
const YAML = require('yamljs');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');
const taskRouter = require('./resources/tasks/task.router');
const loginRouter = require('./resources/login/login.router');
const auth = require('./auth');

const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));

const { logger, errorLogger } = require('./logger');

logger(app);

// Uncomment the string below for check "uncaughtException"
// throw Error('Oops!');

// Uncomment the string below for check "unhandledRejection"
// Promise.reject(Error('Oops!'));

app.use(express.json());

app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req, res, next) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/login', loginRouter);
app.use('/users', auth, userRouter);
app.use('/boards', auth, boardRouter);
boardRouter.use('/:boardId/tasks', auth, taskRouter);

app.use((err, req, res, next) => {
  errorLogger(`Internal server error: ${err.message}`);
  // res.status(500).send(err.message);
  next();
});

module.exports = app;
