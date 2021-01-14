var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')

const app = express()

app.use(express.static('dist'))

console.log('Server index.js running before cors setup')

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})

// designates what port the app will listen to for incoming requests
// Change when moving to environments (8080 dev, 8081 prod)
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

console.log('Server index.js running before getSentiment post route setup')
// Route used by formHandler to access call to Sentiment API via SentimentAPI.js
app.post('/getSentiment', function (req, res) {
    console.log('Server index.js is routing get request for getSentiment')
    res.send(performAction)
})
