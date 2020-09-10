const express = require('express')
const path = require('path')
const { response } = require('express')

const app = express()

const publicDirectoryPath = path.join(__dirname, "../public")

app.use(express.static(publicDirectoryPath))
app.get('',(req, res) => {
    res.send('<h1>Hello express!</h1>')
})

app.get('/weather', (req, res) => {
    res.send('Weather page')
})
app.listen(3000, () => {
    console.log('Server is up on port 3000')
})