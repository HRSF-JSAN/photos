const mongoose = require('mongoose');
require('dotenv').config();

mongoose.connect('mongodb://localhost/photos');

const db = mongoose.connection;

const photosSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  pictures: String,
  foodType: String,
  name: String,
  comment: String,
});

photosSchema.index({ id: 1 }, { unique: true });

const Restaurant = mongoose.model('restaurant', photosSchema);

module.exports.populate = (restaurants) => {
  let counter = 0;
  restaurants.forEach((obj) => {
    const savedData = new Restaurant({
      id: obj.id,
      pictures: JSON.stringify(obj.pictures),
      foodType: obj.foodType,
      name: JSON.stringify(obj.name),
      comment: JSON.stringify(obj.comment),
    });
    savedData.save((err) => {
      if (err) {
        throw err;
      }
      counter += 1;
      if (counter === 100) {
        db.close();
      }
    });
  });
};

const selectOne = id => (
  Restaurant.findOne({ id })
);


module.exports.selectOne = selectOne;
module.exports.db = db;
