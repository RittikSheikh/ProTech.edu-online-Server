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


app.get('/course/:id', (req, res) => {
    const id = req.params.id;
    const selectedCourse = courses.find(c => c.id === id)
    res.send(selectedCourse)
})

app.listen(port, () => {
    console.log('server is running on port', port)
})