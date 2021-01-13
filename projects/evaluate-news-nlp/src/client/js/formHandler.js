async function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
 
    let valid = Client.isValidURL(formText)
        // if isValidURL return VALID use the routing in server.js file 
        // to send the url to the sentimentAPI js file for processing
        // THIS CODE MAY POSSIBLY WORK TO MAKE CALL TO SERVER JS 
    if(!valid) {
        document.getElementById('errorMsg').innerHTML = "Please enter a valid URL.";
        return
    }
        console.log('Trying to launch getSentiment from formHandler!')
        // CHANGE PORT TO 8081 WHEN MOVING TO DEV
        await fetch('http://localhost:8080/getSentiment', {
                method: 'POST',
                credentials: 'same-origin',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({url:formText})
            })
        // IF SENTIMENT API Returns the result back to formHandler use this to display the result
        // Although may be able to just display in SentimentAPI.js, unsure best method
            .then(res => res.json())
  
            .then(function(res) {
            document.getElementById('results').innerHTML = res.message;
         }) .catch(err => {
                document.getElementById('errorMsg').innerHTML = 'Server Error: ' + err;
            })
      }

export { handleSubmit }
