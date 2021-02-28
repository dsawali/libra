const fetch = require('node-fetch');

const getSearchJSON = async (args) => {
  const response = await fetch(`${process.env.BASEURL}/search/${args}`);
  const data = await response.json();

  return data;
}

const getQuoteJSON = async (args) => {
  const response = await fetch(`${process.env.BASEURL}/quote/${args}`);
  const data = await response.json();

  return data
}

module.exports = {
  getSearchJSON,
  getQuoteJSON
};