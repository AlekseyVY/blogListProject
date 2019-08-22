//module for app routing
const blogRouter = require('express').Router()
const Blog = require('../models/blog')

//get method for app
blogRouter.get('/', (request, response) => {
    Blog.find({}).then(blogs => {
        response.json(blogs)
    })
})
//post method for app
blogRouter.post('/', (request, response) => {
    const blog = new Blog(request.body)

    blog.save().then(result => {
        response.status(201).json(result)
    })
})


module.exports = blogRouter