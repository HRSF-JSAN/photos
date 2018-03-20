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
    pictures: photos,
    foodType: helpers.randomFood(),
    name: names,
    comment: comments,
  };

  return restaurant;
};

module.exports = mongoGenerator;
