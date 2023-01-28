const express = require('express')
const feedController = require('../controllers/feed')

const router = express.Router()

// 'GET' (Method) '/feed/post' (Route)
router.get('/posts', feedController.getPosts)
// POST request to /feed/posts
router.post('/posts', feedController.createPost)

module.exports = router