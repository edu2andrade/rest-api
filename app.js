const express = require('express')
const feedRouter = require('./routes/feed')

const app = express()

// Body Parse thing -->
app.use(express.urlencoded({extended: true}))
app.use(express.json()) // To parse the incoming requests with JSON payloads

/**
 * We don't need body-parser anymore.
 * 
 * To parse the incoming requests with JSON payloads.
 * More info: https://stackoverflow.com/questions/66525078/bodyparser-is-deprecated
 * 
 */

// CORS -->
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.use('/feed', feedRouter)

app.listen(8080)