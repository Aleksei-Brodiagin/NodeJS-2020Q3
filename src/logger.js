const { createWriteStream, writeFileSync } = require('fs');
const morgan = require('morgan');
const os = require('os');

const errorLogger = message => {
  console.error(message);
  writeFileSync('./error.log', message + os.EOL, { flag: 'a+' });
};

const logger = app => {
  morgan.token('body', req => JSON.stringify(req.body));
  morgan.token('query', req => JSON.stringify(req.query));
  app.use(morgan(':method :url :query :body :status :response-time ms'));
  app.use(
    morgan(':method :url :query :body :status :response-time ms', {
      stream: createWriteStream('./access.log', { flags: 'a+' })
    })
  );

  process.on('uncaughtException', error => {
    errorLogger(`Captured error: "${error.message}"`);
    const exit = process.exit;
    exit(1);
  });

  process.on('unhandledRejection', reason => {
    errorLogger(`Unhandled rejection detected: "${reason.message}"`);
    const exit = process.exit;
    exit(1);
  });
};

module.exports = { logger, errorLogger };
