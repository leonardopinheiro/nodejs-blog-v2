const mongoose = require('mongoose')

const Post = require('./database/models/Post')

mongoose.connect('mongodb://localhost/node-js-test-blog')

// Post.create({
//     title: "My second post",
//     description: "Second post description",
//     content: "content!!!!!!!!!!!!!!!!!!!"
// }, (error, post) => {
//     console.log(error, post)
// })

Post.findById("5d642a9bdcdbe949f958306d", (error, post) => {
    console.log(error, post)
})