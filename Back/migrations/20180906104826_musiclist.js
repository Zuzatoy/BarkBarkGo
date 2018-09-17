exports.up = (knex, Promise) => {
    return knex.schema.createTable('musiclist', table => {
      table.increments('id')
      table.string('one')
      table.string('two')
      table.string('three')
      table.string('four')
      table.string('five')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.dropTableifExists('musiclist')
  }
  