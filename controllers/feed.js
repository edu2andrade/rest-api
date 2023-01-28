exports.getPosts = (req, res, next) => {
  res.status(200).json({
    posts: [{
      _id: '1',
      title: 'First Post',
      content: 'This is my first post',
      imageUrl: 'images/bicepsCurl.jpg',
      creator: {
        name: 'Eduardo'
      },
      createdAt: new Date()
    }]
  })
  /**
   * This will work too:
   * 
   * res.status(200).send({message: 'Hello World'})
   * 
   * but the more specific we are, better.
   */
}

exports.createPost = (req, res, next) => {
  // Create a message in db:
  const title = req.body.title
  const content = req.body.content

  res.status(201).json({
    message: 'Post created successfully',
    post: { 
      _id: new Date().toISOString(),
      title,
      content,
      creator: {
        name: 'Eduardo'
      },
      createdAt: new Date()
    }
  })
}