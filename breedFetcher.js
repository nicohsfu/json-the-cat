const request = require('request');
args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {

  const data = JSON.parse(body);

  try {
    console.log("Description: \n ", data[0].description);
  } catch {
    console.log("Invalid entry! Try again");
  }

});
