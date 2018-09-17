
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'rowValue1', email: 'test', password: 'test', country: 'test' },
        {id: 2, name: 'rowValue1', email: 'test', password: 'test', country: 'test' }
      ]);
    });
};
