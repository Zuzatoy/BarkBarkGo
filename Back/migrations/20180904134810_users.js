exports.up = (knex, Promise) => {
    return knex.schema.createTable('users', table => {
      table.increments('id')
      table.string('name')
      table.string('email')
      table.string('password')
      table.string('country')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.dropTableifExists('users')
  }
  