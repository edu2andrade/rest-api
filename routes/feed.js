const express = require('express')
const feedController = require('../controllers/feed')

const { body } = require('express-validator/check')

const router = express.Router()

// 'GET' (Method) '/feed/post' (Route)
router.get('/posts', feedController.getPosts)
// POST request to /feed/posts
router.post('/posts', [
  body('title').trim().isLength({min: 5}),
  body('content').trim().isLength({min: 5})
], feedController.createPost)

module.exports = router