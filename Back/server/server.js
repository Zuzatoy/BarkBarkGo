const express = require('express')

const apiRoutes = require('./routes/api')
const authRoutes = require('./routes/auth')
const server = express()

// Middleware
server.use(express.json())
// server.use(express.urlencoded({extended: true}))

// server.use(function (req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*')
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
//   next()
// })

// Routes
server.use('/api', apiRoutes)
server.use('/api/v1/auth', authRoutes)
module.exports = server
