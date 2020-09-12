const express = require('express')
const path = require('path')
const hbs = require('hbs')
const { response } = require('express')

const app = express()

//Define paths for Express config
const publicDirectoryPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views")
const partialsPath = path.join(__dirname, "../templates/partials")

//setp handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

//setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get('/', (req,res) => {
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
        helpText: "Some Text",
        title: 'Help',
        name: 'Ankur Singla'
    })
})

app.get('/help/*', (req,res) => {
    res.render('404', {
        title: '404',
        name: 'Ankur Singla',
        errorMessage:'Help article not found'
    })
})

app.get('*', (req, res) => {
    res.render('404',{
        title:'404',
        name:'Ankur Singla',
        errorMessage: 'Page not found'
    })
})
app.listen(3000, () => {
    console.log('Server is up on port 3000')
})