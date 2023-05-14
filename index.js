const express = require('express')
const cors = require('cors')
const app = express()
const port = process.env.PORT || 5000;

const categories = require('./data/categories.json')
const courses = require('./data/courses.json')

app.use(cors())

app.get('/', (req, res) => {
    res.send('hello world from server')
})

app.get('/categories', (req, res) => {
    res.send(categories)
})

app.get('/courses', (req, res) => {
    res.send(courses)
})

app.listen(port, ()=>{
    console.log('server is running on port', port)
})