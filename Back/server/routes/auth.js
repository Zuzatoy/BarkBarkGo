// server/routes/auth.js
const express = require('express')
const {addUser} = require('../db/db')
const token = require('../auth/token')

const router = express.Router()

router.post('/register', register, token.issue)

function register (req, res, next) {
  const {name, password} = req.body
  addUser({name, password})
    .then(([ id ]) => {
      res.locals.userId = id
      next()
    })
    .catch(({message}) => {
      // This is vulnerable to changing databases. SQLite happens to use
      // this message, but Postgres doesn't.
      if (message.includes('UNIQUE constraint failed: users.username')) {
        return res.status(400).json({
          ok: false,
          message: 'Username already exists.'
        })
      }
      res.status(500).json({
        ok: false,
        message: message
        // "Something bad happened. We don't know why."
      })
    })
}

module.exports = router
