const fs = require('fs');
const generator = require('../mockData/mongoGenerator');

const writeStream = fs.createWriteStream('./database-mongo/mockData10Mil.json');

const write10Mil = (start) => {
  let move = true;
  let i = start;

  while (i > 0 && move) {
    move = writeStream.write(JSON.stringify(generator(i)));
    i -= 1;
  }

  if (i > 0) {
    writeStream.once('drain', () => {
      write10Mil(i);
    });
  }
};

write10Mil(1e7);
