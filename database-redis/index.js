const redis = require('redis');

const REDIS_PORT = process.env.REDIS_PORT || 6379;
const client = redis.createClient(REDIS_PORT);

const get = (key, callback) => {
  client.get(key, callback);
};

const set = (key, value) => {
  const stringVal = JSON.stringify(value);
  client.setex(`${key}`, 10, stringVal);
};

module.exports.get = get;
module.exports.set = set;
