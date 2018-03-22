const fs = require('fs');
// const generator = require('../mockData/pgPicGenerator');
const helpers = require('./generatorHelpers');

const writeStream = fs.createWriteStream('./database-postgres/picMockData10Mil.csv');

const write10Mil = (start) => {
  let move = true;
  let i = start;

  while (i > 0 && move) {
    const numPics = helpers.randomNum(30) + 1;
    for (let j = 0; j < numPics; j += 1) {
      move = writeStream.write(`${i},"${helpers.randomPhoto()}","${helpers.randomName()}","${helpers.randomComment()}"`);
      if (j !== numPics - 1 || i !== 1) {
        writeStream.write('\n');
      }
    }
    i -= 1;
    if (i % 10000 === 0) {
      console.log(i);
    }
  }

  if (i > 0) {
    writeStream.once('drain', () => {
      write10Mil(i);
    });
  }
  if (i === 0) {
    console.log('Success');
  }
};

write10Mil(1e7);
