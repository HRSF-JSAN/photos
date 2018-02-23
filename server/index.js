const express = require('express');
const bodyParser = require('body-parser');
const items = require('../database-mongo');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '/../react-client/dist')));

app.get('/pictures', (req, res) => {
  items.selectAll((err, data) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.json(data);
    }
  });
});

<<<<<<< HEAD
app.listen(3000);

module.exports = app;
=======
app.listen(3000, () => {
  console.log('listening on port 3000!'); // eslint-disable-line
});
>>>>>>> initial commit
