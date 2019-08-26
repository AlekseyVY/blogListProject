const Blog = require('../models/blog')

const initialBlog = [
    {
        title: "Olololsh ololoshevich",
        author: 'Super User',
        url: "http:/mkjkpmpiomipomiomimiomikmikmpok.com",
        likes: 7000
    },
    {
        title: "Learn programming and the prisoner of mind",
        author: "dummy",
        url: "https:/lpfsijmkgekofmodmfkoaemkfmafmcpoa.com",
        likes: 1000
    }
]

const blogsInDb = async () => {
    const blog = await Blog.find({})
    return blog.map(b => b.toJSON())
}

module.exports = {
    initialBlog, blogsInDb
}