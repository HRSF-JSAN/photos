const router = require('./router');

const handler = (req, res) => {
  if (req.method !== 'GET') {
    res.writeHead(400);
    res.end();
  } else if (req.url === '/') {
    router.htmlRoute(res);
  } else if (req.url === '/style.css') {
    router.cssRoute(res);
  } else if (req.url === '/bundle.js') {
    router.bundleRoute(res);
  } else if (req.url.slice(0, 10) === '/pictures/') {
    const id = req.url.slice(10);
    router.redisRoute(id, res);
  } else {
    res.writeHead(400);
    res.end();
  }
};

module.exports = handler;
