const express = require('express');
const items = require('../database-mongo');

const router = express.Router();

router.get('/pictures/:picturesID', (req, res) => {
  const pictureId = req.params.picturesID;
  items.selectOne((err, data) => {
    if (err) {
      res.sendStatus(404);
      res.send(err);
    } else {
      res.json(data);
    }
  }, pictureId);
});

module.exports = router;
