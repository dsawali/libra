import {} from 'dotenv/config.js';

const config = {
  finnhubBaseurl: process.env.FINNHUB_BASE_URL,
  token: process.env.FINNHUB_TOKEN,
  mongoUrl: process.env.DB_URL,
};

export default config;
