const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const config = require('./utils/config')
const blogRouter = require('./controllers/blogs')


app.use(cors())
app.use(bodyParser.json())
app.use('/api/blogs',blogRouter)

mongoose.connect(config.MONGODB_URI, {useNewUrlParser: true}).then(()=>{
    console.log('connected to MongoDB')
}).catch((error) => {
    console.log('error connection to MongoDB: ', error.message)
})


module.exports = app