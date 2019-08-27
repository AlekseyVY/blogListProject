//module for app routing
const blogRouter = require('express').Router()
const Blog = require('../models/blog')

//get method for app
blogRouter.get('/', async (request, response) => {
   const blogs =  await Blog.find({})
    response.json(blogs.map((blog) => blog.toJSON()))
})
// get method for single blog find by id
blogRouter.get('/:id', async (request, response) => {
    const blog = await Blog.findById(request.params.id)
    response.json(blog.toJSON())
})
//post method for app
blogRouter.post('/', async (request, response) => {
    const blog = new Blog(request.body)

    try {
        const savedBlog = await blog.save()
        response.json(savedBlog.toJSON())
    } catch (exception) {
        next(exception)
    }
    })

blogRouter.delete('/:id', async (request, response, next) => {
    try {
        await Blog.findByIdAndRemove(request.params.id)
        response.status(204).end()
    } catch (e) {
        next(e)
    }
})

blogRouter.put('/:id', async (request, response, next) => {
    const body =  await request.body

    const blog = {
        title: body.title,
        author: body.author,
        url: body.url,
        likes: body.likes
    }
    try {
        await Blog.findByIdAndUpdate(request.params.id, blog, {new: true})
        response.status(200).end()
    } catch (e) {
        next(e)
    }
})

module.exports = blogRouter