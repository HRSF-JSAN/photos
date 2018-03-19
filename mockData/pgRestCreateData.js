const fs = require('fs');
// const generator = require('../mockData/pgRestGenerator');
const { randomFood } = require('./generatorHelpers');

const writeStream = fs.createWriteStream('./database-postgres/restMockData10Mil.csv');

const write10Mil = (start) => {
  let move = true;
  let i = start;

  while (i > 0 && move) {
    move = writeStream.write(`${i},"${randomFood()}"`);
    i -= 1;
    if (i !== 0) {
      writeStream.write('\n');
    }
  }

  if (i > 0) {
    writeStream.once('drain', () => {
      write10Mil(i);
    });
  }
};

write10Mil(1e7);
