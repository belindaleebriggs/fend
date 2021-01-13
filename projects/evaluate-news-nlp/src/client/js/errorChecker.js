function isValidURL(inputURL) {
  console.log("::: errorChecker is checking if this is a valid URL :::", inputURL);
  // check to see if the url is valid, if URL IS VALID return true to formHandler.js
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  
console.log('Url is valid? ' + !!pattern.test(inputURL));
return !!pattern.test(inputURL);
}

export { isValidURL }
