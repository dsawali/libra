import {} from 'dotenv/config.js';

const config = {
  baseurl: process.env.FINNHUB_BASE_URL,
  token: process.env.FINNHUB_TOKEN
}

export default config;