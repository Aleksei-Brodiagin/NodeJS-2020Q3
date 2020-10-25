const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Board = new Schema(
  {
    title: String,
    columns: [
      {
        id: String,
        title: String,
        order: Number
      }
    ]
  },
  { collection: 'boards' }
);

const toResponse = board => {
  const { id, title, columns } = board;
  return { id, title, columns };
};

module.exports = {
  Board: mongoose.model('boards', Board),
  toResponse
};
