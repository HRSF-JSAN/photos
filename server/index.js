const http = require('http');
const handler = require('./handlerFunc');

const server = http.createServer(handler);

const port = process.env.PORT || 3030;

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});

module.exports = server;
