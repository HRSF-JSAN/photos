const express = require('express');
const searchOne = require('../database-postgres/queryDB.js');

const router = express.Router();

router.get('/pictures/:picturesID', (req, res) => {
  const pictureId = req.params.picturesID;
  searchOne(pictureId, (err, data) => {
    if (err) {
      res.sendStatus(500);
      return;
    }

    const restaurant = {
      id: Number(pictureId),
      pictures: [],
      foodType: '',
      name: [],
      comment: [],
    };

    const dbData = data.rows;
    restaurant.foodType = dbData[0].food_type;
    dbData.forEach((row) => {
      restaurant.pictures.push(row.url);
      restaurant.name.push(row.user_name);
      restaurant.comment.push(row.comment);
    });
    restaurant.pictures = JSON.stringify(restaurant.pictures);
    restaurant.name = JSON.stringify(restaurant.name);
    restaurant.comment = JSON.stringify(restaurant.comment);
    res.json([restaurant]);
  });
});

module.exports = router;
