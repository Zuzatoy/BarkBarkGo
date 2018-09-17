
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('musiclist').del()
    .then(function () {
      // Inserts seed entries
      return knex('musiclist').insert([
        {id: 1, one: 'rowValue1', two: 'test', three: 'test', four: 'test', five: 'test'}
      ]);
    });
};
