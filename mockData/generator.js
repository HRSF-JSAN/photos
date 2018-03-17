const helpers = require('./generatorHelpers');

const generator = (num) => {
  const numData = helpers.randomNum(30) + 1;

  const restaurant = {
    id: num,
    pictures: JSON.stringify(helpers.randomPhotos(numData)),
    foodType: helpers.randomFood(),
    name: JSON.stringify(helpers.randomNames(numData)),
    comment: JSON.stringify(helpers.randomComments(numData)),
  };

  return restaurant;
};

module.exports = generator;
