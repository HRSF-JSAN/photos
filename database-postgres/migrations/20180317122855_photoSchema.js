exports.up = (knex, Promise) => (
  Promise.all([
    knex.schema.createTable('restaurants', (table) => {
      table.integer('id').primary();
      table.string('food_type');
    }),
    knex.schema.createTable('pictures', (table) => {
      table.increments('id').primary();
      table.integer('rest_id').unsigned()
        .references('restaurants.id');
      table.string('url');
      table.string('user_name');
      table.string('comment');
    }),
  ])
);

exports.down = (knex, Promise) => (
  Promise.all([
    knex.schema.dropTable('pictures'),
    knex.schema.dropTable('restaurants'),
  ])
);
