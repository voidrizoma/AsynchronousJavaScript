let xml = require('xmlhttprequest').xml;


const fetchData = (url) =>{
  return new Promise((resolve, reject) =>{
    const xhttp = new xml()
    xhttp.open('GET', url, true)
    if(xhttp.readyState === 4) {
      (xhttp.status === 200)
        ? resolve(JSON.parse(xhttp.responseText))
        : reject(new Error('Error', url))
     }
  })
  xhttp.send()
}

module.exports = fetchData;
