const fetch = require('node-fetch');

const getResponseJSON = async (url) => {
  try {
    const response = await fetch(
      url,
      {
        method: 'GET'
      }
    );
    const data = await response.json();
    // TODO: also return status code
    return data;  
  } catch (e) {
    
  }
}

module.exports = {
  getResponseJSON
};