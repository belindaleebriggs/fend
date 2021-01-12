function isValidURL(inputText) {
    console.log("::: Checking if this is a valid URL :::", inputText);
    let url;
  
    try {
      url = new URL(string);
    } catch (_) {
  
      return false;  
    }
    alert(url);
    return url.protocol === "http:" || url.protocol === "https:";
}

export { isValidURL }
