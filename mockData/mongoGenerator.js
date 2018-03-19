const helpers = require('./generatorHelpers');

const mongoGenerator = (num) => {
  const numData = helpers.randomNum(30) + 1;
  const photos = [];
  const names = [];
  const comments = [];

  for (let i = 0; i < numData; i += 1) {
    photos.push(helpers.randomPhoto());
    names.push(helpers.randomName());
    comments.push(helpers.randomComment());
  }

  const restaurant = {
    id: num,
    pictures: JSON.stringify(photos),
    foodType: helpers.randomFood(),
    name: JSON.stringify(names),
    comment: JSON.stringify(comments),
  };

  return restaurant;
};

module.exports = mongoGenerator;
