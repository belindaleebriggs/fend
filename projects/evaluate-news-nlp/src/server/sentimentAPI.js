/* Global Variables */

// GET Route for Sentiment API
let baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
let apiKey = '?key=' + process.env.API_KEY;

// function to make API call to Meaningcloud's Sentiment API
async function getSentiment(baseURL, url, key) {
  console.log('getSentiment is running!')
  const outputFormat = '&of=json';
  const urlToEvaluate = '&url=' + url;
  const model = '&model=example-model';
  const language = '&lang=en';
  const apiUrl = baseURL + key + outputFormat + urlToEvaluate + model + language;
  const res = await fetch(apiUrl);
  try {
    const data = await res.json();
    return data;
  } catch (error) {
    console.log('error ', error);
    //appropriately handle error
  }
}

// Grabs text to evaluate when user clicks Generate button
function performAction(e){
  // get data from form
  const urlToEvaluate = document.getElementById('evaluate-me').value;

  getSentiment(baseURL, urlToEvaluate, apiKey)
    .then(function(data) {
      console.log(data);
      // Add data to data object in server.js via POST request
      const dataObject = {
        positivity: score_tag,
        truth_or_opinion: subjectivity,
      }
      postData('/add',dataObject);
    })
    .then (function(){
        updateUI();
      }
    )
}



// Process a post request
const postData = async(url='', data = {}) => {
  const response = await fetch(url, {
  method: 'POST',
  credentials: 'same-origin',
  headers: {
    'Content-Type' : 'application/json',
  },
    body: JSON.stringify(data),
});
try {
  const newData = await response.json();
  console.log(`NewData is ${Object.values(newData)}`);
  return newData
  } catch (error) {
    console.log('error ', error);
    //appropriately handle error
  }
}

// Function to update the UI with the addData
const updateUI = async() => {
  const request = await fetch('/all');
  try {
    const allData = await request.json()
    console.log(`UpdateUI allData: ${Object.values(allData)}`);
    console.log(`Positivity Rating: ${allData.positivity}`);
    document.getElementById('results').innerHTML = `This ${allData.truth_or_opinion}ly written content earned a postitivity rating of ${allData.positivity}.`;
  } catch (error) {
    console.log('error ', error);
    //appropriately handle error
  }


    }

    performAction(e)

// listen on Generate button to trigger getSentiment fxn
// document.getElementById('generate').addEventListener('click', Client.performAction);

/* For Debugging Call getData and postData
getData('/all');
postData('/purple')

End for Debugging */

export { performAction }
