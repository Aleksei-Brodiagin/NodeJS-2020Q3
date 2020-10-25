const { PORT, MONGO_CONNECTION_STRING } = require('./common/config');
const app = require('./app');
const mongoose = require('mongoose');

mongoose.connect(MONGO_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});

const db = mongoose.connection;

db.on('error', () => console.log('Mongo connection error')).once('open', () => {
  console.log('Successfully connect to DB');

  app.listen(PORT, () =>
    console.log(`App is running on http://localhost:${PORT}`)
  );
});
