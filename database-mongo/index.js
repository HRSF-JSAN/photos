const mongoose = require('mongoose');
const data = require('../data.js');

mongoose.connect('mongodb://localhost/pictures');

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error'); // eslint-disable-line
});

db.once('open', () => {
  console.log('mongoose connected successfully'); // eslint-disable-line
});


const itemSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  pictures: String,
  foodType: String,
  name: String,
  comment: String,
});

const Restaurant = mongoose.model('restaurant', itemSchema);

const populate = (restaurant) => {
  const seedData = (req, res) => {
    restaurant.forEach((obj) => {
      const savedData = new Restaurant({
        id: obj.id,
        pictures: JSON.stringify(obj.pictures),
        foodType: obj.foodType,
        name: obj.name,
        comment: obj.comment,
      });
      savedData.save();
    });
    res.send('Data seeded');
  };
  seedData();
};
populate(data);

const selectAll = (callback) => {
  Restaurant.find({}, (err, items) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;
