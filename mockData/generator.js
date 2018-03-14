const helpers = require('./mockDataHelpers');

const generator = (num) => {
  const numData = helpers.randomNum(40) + 1;

  const restaurant = {
    id: num,
    pictures: helpers.randomPhotos(numData),
    foodType: helpers.randomFood(),
    name: helpers.randomNames(numData),
    comment: helpers.randomComments(numData),
  };

  return restaurant;
};

module.exports = generator;
