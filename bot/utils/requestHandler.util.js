const fetch = require('node-fetch');

const get = async (url) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
    });
    const data = await response.json();

    return data;
  } catch (e) {
    console.log(`Error fetching Gemini endpoint: ${e}`);
  }
};

const post = async (url, body) => {
  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();

    return { status: response.status, data };
  } catch (e) {
    console.log(`Error posting to Gemini endpoint: ${e}`);
  }
};

module.exports = {
  get,
  post,
};
