const mongoose = require('mongoose')
const supertest = require('supertest')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')

beforeEach(async () => {
    await Blog.deleteMany({})

    for (let blog of helper.initialBlog) {
        let blogObject = new Blog(blog)
        await blogObject.save()
    }
})


test('blogs are returned as JSON', async () => {
    await api.get('/api/blogs').expect(200).expect('Content-Type', /application\/json/)
})

test('number of blogs returned', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body.length).toBe(2)
})

test('POST is working as intended', async () => {
    const blogsStart = await helper.blogsInDb()

    await api.post('/', async (response, request) => {
        const blog = new Blog({
            title: "Super Smash bros",
            author: "Mescuzi",
            url: "https:///njnjjjijfpoiasjfpasj",
            likes: 546498
        })
        const blogsEnd = helper.blogsInDb()
        blog.save()
        expected(blogsEnd.body.length).toBe(blogsStart.body.length + 1)
    })
})

afterAll(() => {
    mongoose.connection.close()
})