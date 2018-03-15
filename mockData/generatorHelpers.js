const faker = require('faker');

const randomNum = max => (
  Math.floor(Math.random() * max)
);

const randomNames = (numNames) => {
  const names = [];
  for (let i = 0; i < numNames; i += 1) {
    const name = faker.name.findName();
    names.push(name);
  }
  return names;
};

const randomComments = (numComments) => {
  const comments = [];
  for (let i = 0; i < numComments; i += 1) {
    const numSent = randomNum(2);
    const comment = faker.lorem.sentences(numSent + 1);
    comments.push(comment);
  }
  return comments;
};

const randomPhotos = (numPhotos) => {
  const photos = [];
  for (let i = 0; i < numPhotos; i += 1) {
    const photoName = faker.internet.password();
    const img = `${faker.image.imageUrl()}/${photoName}.jpg`;
    photos.push(img);
  }
  return photos;
};

const randomFood = () => {
  const foods = ['American', 'American New', 'Italian', 'Indian', 'Vietnamese', 'Pho', 'Chinese', 'Sushi', 'Steakhouse', 'Pizza',
    'Greek', 'Japanese', 'Brunch', 'Diner', 'Burmese', 'Ethopian', 'Mexican', 'Mole', 'Bars', 'Pub', 'Irish Pub', 'Thai', 'Tapas',
    'Mediterranean', 'Seafood', 'Bistro', 'Bakery', 'Oyster Bar', 'Cajun', 'Soul Food', 'Dim Sum', 'Lebanese', 'Moroccan', 'Spanish'];
  const index = randomNum(foods.length);
  return foods[index];
};

module.exports.randomNum = randomNum;
module.exports.randomNames = randomNames;
module.exports.randomComments = randomComments;
module.exports.randomPhotos = randomPhotos;
module.exports.randomFood = randomFood;
