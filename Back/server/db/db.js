
const connection = require('./connection')
const {generateHash} = require('../auth/hash')

module.exports = {
  getUsers,
  getUser,
  addUser,
  deleteUser,
  updateUser
}

function getUsers (db = connection) {
  return db('users').select()
}

function getUser (id, db = connection) {
  return db('users').where('id', id).first()
}

function addUser ({name, password}, db = connection) {
  const hash = generateHash(password)
  return db('users').insert({name, hash})
}

function deleteUser (id, db = connection) {
  return db('users').where('id', id).del()
}

function updateUser (user, db = connection) {
  return db('users').where('id', user.id).update(user)
}
