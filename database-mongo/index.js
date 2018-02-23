const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/pictures');
const data = require('../data.js');

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

const Resturant = mongoose.model('resturant', itemSchema);

const populate = (resturants) => {
  resturants.forEach((obj) => {
    const savedData = new Resturant({
      id: obj.id,
      pictures: obj.pictures,
      foodType: obj.foodType,
      name: obj.name,
      comment: obj.comment,
    });
    savedData.save();
  });
};
populate(data);

const selectAll = (callback) => {
  Resturant.find({}, (err, items) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

exports.selectAll = selectAll;
