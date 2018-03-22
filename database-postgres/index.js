const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  user: 'Sara',
  database: 'photos',
  port: 5432,
  max: 35,
});

module.exports = pool;
