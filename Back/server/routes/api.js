const express = require('express')
// const Feed = require('rss-to-json')

const db = require('../db/db')

const router = express.Router()
router.use(express.json())

router.get('/getAllUsers', (req, res) => {
  db.getUsers()
    .then(users => {
      res.json({users: users})
    })
    .catch(err => {
      res.status(500).send('Database Error: ' + err.message)
    })
})

router.get('/getUser/:id', (req, res) => {
  const id = Number(req.params.id)
  db.getUser(id)
    .then(user => {
      res.json({user: user})
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/addUser', (req, res) => {
  const newUser = req.body
  db.addUser(newUser)
    .then(() => {
      res.status(200).send('Added ' + newUser.name)
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

router.post('/register', (req, res) => {
  const newUser = req.body
  db.addUser(newUser)
    .then(user => {
      res.redirect('http://localhost:4000')
    })
    .catch(err => {
      res.status(500).send('DATABASE ERROR: ' + err.message)
    })
})

// router.get('/rss', (req, res) => {
//   Feed.load('https://meduza.io/rss/all', (err, rss) => {
//     res.json(rss)
//   })
// })

// router.get('/getAllMusicList', (req, res) => {
//   db.
// })

//  router.post('/submitemusic', (req, res) => {
//    const newMusicList = req.body
//  })

module.exports = router
