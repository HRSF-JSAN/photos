const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const router = require('./router.js');


const app = express();
app.use(morgan('dev'));

app.use(bodyParser.json());
app.use('/', router);
app.use(express.static(path.join(__dirname, '/../react-client/dist')));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`listening on post ${port}`));

module.exports = app;
