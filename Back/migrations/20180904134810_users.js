exports.up = knex =>
  knex.schema.createTable('users', table => {
    table.increments('id').primary()
    table.string('name').unique()
    table.string('email')
    table.string('hash')
    table.string('country')
  })

exports.down = knex => knex.schema.dropTable('users')
