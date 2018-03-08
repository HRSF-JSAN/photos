const items = require('../database-mongo');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const router = require('./router.js');

const app = express();

app.use(bodyParser.json());
app.use('/', router);
app.use(express.static(path.join(__dirname, '/../react-client/dist')));

app.get('/pictures', (req, res) => {
  items.selectAll((err, data) => {
    if (err) {
      res.sendStatus(404);
      res.send(err);
    } else {
      res.json(data);
    }
  });
});
const port = process.env.PORT || 3000;
app.listen(port);

module.exports = app;
