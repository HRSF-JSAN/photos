const client = require('./index');

const selectOne = (id, callback) => {
  const searchTerm = `SELECT restaurants.id, pictures.url, restaurants.food_type, pictures.user_name, pictures.comment FROM restaurants INNER JOIN pictures ON (restaurants.id = pictures.rest_id) WHERE restaurants.id = ${id}`;

  client
    .query(searchTerm)
    .then(data => callback(null, data))
    .catch(err => callback(err, null));
};

module.exports = selectOne;
