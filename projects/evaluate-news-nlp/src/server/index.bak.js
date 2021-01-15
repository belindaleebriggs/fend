/* Express to run server and routes */
const express = require('express');
const app = express(); // start up an instance

/* Dependencies */
// Use env file for api key
const dotenv = require('dotenv');
dotenv.config();

// Tells what data type we mostly will work with
const bodyParser = require ('body-parser')
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// let browser and server talk without any security interuptions
const cors = require("cors")
app.use(cors())


/* Initialize main project folder */
app.use(express.static('dist'))

/* Create local server */
/* Variables */
var path = require('path');
// Change when moving to environments (8080 dev, 8081 prod)
const port = 8080;
const sentimentAPIResponse = require('./sentimentAPI.js');
const server = app.listen(port, listening);
    
function listening() {
    console.log(`Server running`);
    console.log(`listening on localhost: ${port}!`);
}



console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'))
})



console.log('Server index.js running before getSentiment post route setup')
// Route used by formHandler to access call to Sentiment API via SentimentAPI.js
app.post('/getSentiment', sentimentAPIResponse)
//
// app.post('/getSentiment', function (req, res) {
    console.log('Server index.js is routing post request for getSentiment')
//    res.send(performAction)
