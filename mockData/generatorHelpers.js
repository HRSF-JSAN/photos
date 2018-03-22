const faker = require('faker');

const randomNum = max => (
  Math.floor(Math.random() * max)
);

const randomName = () => (
  faker.name.findName()
);

const randomComment = () => {
  const numSent = randomNum(2);
  const comment = faker.lorem.sentences(numSent + 1);
  return comment;
};

const randomPhoto = () => {
  const photoName = faker.internet.password();
  const img = `${faker.image.imageUrl()}/${photoName}.jpg`;
  return img;
};

const randomFood = () => {
  const foods = ['American', 'American New', 'Italian', 'Indian', 'Vietnamese', 'Pho', 'Chinese', 'Sushi', 'Steakhouse', 'Pizza',
    'Greek', 'Japanese', 'Brunch', 'Diner', 'Burmese', 'Ethopian', 'Mexican', 'Mole', 'Bars', 'Pub', 'Irish Pub', 'Thai', 'Tapas',
    'Mediterranean', 'Seafood', 'Bistro', 'Bakery', 'Oyster Bar', 'Cajun', 'Soul Food', 'Dim Sum', 'Lebanese', 'Moroccan', 'Spanish'];
  const index = randomNum(foods.length);
  return foods[index];
};

module.exports.randomNum = randomNum;
module.exports.randomName = randomName;
module.exports.randomComment = randomComment;
module.exports.randomPhoto = randomPhoto;
module.exports.randomFood = randomFood;
