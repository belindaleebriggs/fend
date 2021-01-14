var path = require('path')
// designates what port the app will listen to for incoming requests
// Change when moving to environments (8080 dev, 8081 prod)
const port = 8080
const express = require('express')
// const mockAPIResponse = require('./mockAPI.js')
const sentimentAPIResponse = require('./sentimentAPI.js')
const cors = require("cors");

const app = express()

app.use(cors())
app.use(express.static('dist'))

console.log('Server index.js running before cors setup')

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`)
})

console.log('Server index.js running before getSentiment post route setup')
// Route used by formHandler to access call to Sentiment API via SentimentAPI.js
app.post('/getSentiment', sentimentAPIResponse)
//
// app.post('/getSentiment', function (req, res) {
    console.log('Server index.js is routing get request for getSentiment')
//    res.send(performAction)
