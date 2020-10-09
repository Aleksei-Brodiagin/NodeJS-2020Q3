const uuid = require('uuid');

class Board {
  constructor({ id = uuid(), title = 'Title', columns = col(columns) } = {}) {
    this.id = id;
    this.title = title;
    this.columns = col(columns);
  }
}

const col = columns => {
  columns.forEach(item => {
    item.id = uuid();
  });
  return columns;
};

module.exports = Board;
