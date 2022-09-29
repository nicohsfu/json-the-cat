const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    const data = JSON.parse(body);

    if (error) {
      callback("error", null);
      return;
    }
    
    // console.log("data:", data)
    
    if (data.length === 0) {
      callback("Invalid breed", null);
      return;
    }
    
    return callback(null, data[0].description);

  });
};

module.exports = {
  fetchBreedDescription
};