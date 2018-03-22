const fs = require('fs');
const { selectOne } = require('../database-mongo/index');
const redis = require('../database-redis/index');

const headers = {
  'Content-Type': '',
};

const staticPath = '/Users/Sara/HackReactor/GroupProjects/JSAN/photos/react-client/dist';

const htmlRoute = (res) => {
  const fileStream = fs.createReadStream(`${staticPath}/index.html`, 'UTF-8');
  headers['Content-Type'] = 'text/html';
  res.writeHead(200, headers);
  fileStream.pipe(res);
};

const cssRoute = (res) => {
  const fileStream = fs.createReadStream(`${staticPath}/style.css`, 'UTF-8');
  headers['Content-Type'] = 'text/css';
  res.writeHead(200, headers);
  fileStream.pipe(res);
};

const bundleRoute = (res) => {
  const fileStream = fs.createReadStream(`${staticPath}/bundle.js`, 'UTF-8');
  headers['Content-Type'] = 'application/json';
  res.writeHead(200, headers);
  fileStream.pipe(res);
};

const mongoRoute = (id, res) => {
  selectOne(id)
    .then((data) => {
      headers['Content-Type'] = 'application/json';
      res.writeHead(200, headers);
      res.write(JSON.stringify([data]));
      res.end();
      redis.set(id, [data]);
    })
    .catch(() => {
      res.statusCode = 500;
      res.end();
    });
};

const redisRoute = (id, res) => {
  redis.get(id, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end();
    } else if (data === null) {
      mongoRoute(Number(id), res);
    } else {
      headers['Content-Type'] = 'application/json';
      res.writeHead(200, headers);
      res.write(data);
      res.end();
    }
  });
};


module.exports.htmlRoute = htmlRoute;
module.exports.cssRoute = cssRoute;
module.exports.bundleRoute = bundleRoute;
module.exports.mongoRoute = mongoRoute;
module.exports.redisRoute = redisRoute;

