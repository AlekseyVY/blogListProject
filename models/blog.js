// Module for defining Schema and constraints of data for DB
const mongoose = require('mongoose')

// defining Schema and constraints for data template for DB
const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minLength: 3
    },
    author: {
        type: String
    },
    url: {
        type: String,
        required: true,
        minLength: 3
    },
    likes: {
        type: Number
    }
})

//changes to blog object
blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Blog', blogSchema)