const express = require('express');
const items = require('../database-mongo');

const router = express.Router();

router.get('/pictures/:picturesID', (req, res) => {
  const pictureId = req.params.picturesID;
  items.selectOne(pictureId)
    .then(data => res.json([data]))
    .catch(() => res.sendStatus(500));
});

module.exports = router;
