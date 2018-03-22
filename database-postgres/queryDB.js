const pool = require('./index');

const selectOne = (id, callback) => {
  const searchTerm = `SELECT restaurants.id, pictures.url, restaurants.food_type, pictures.user_name, pictures.comment FROM restaurants INNER JOIN pictures ON (restaurants.id = pictures.rest_id) WHERE restaurants.id = ${id}`;
  pool.connect()
    .then(client => (
      client
        .query(searchTerm)
        .then((data) => {
          callback(null, data);
          client.release();
        })
        .catch((err) => {
          callback(err, null);
          client.release();
        })
    ))
    .catch((err) => {
      console.log('postgres error: ', err);
    });
};

module.exports = selectOne;
