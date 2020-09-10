const express = require('express')
const path = require('path')
const { response } = require('express')

const app = express()

const publicDirectoryPath = path.join(__dirname, "../public")

app.set('view engine', 'hbs')
app.use(express.static(publicDirectoryPath))

app.get('', (req,res) => {
    res.render('index', {
        title: 'Weather App',
        name: 'Ankur Singla'
    })
})

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Ankur Singla'
    })
})

app.get('/help', (req, res) => {
    res.render('help', {
        helpText: "Some Text"
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})