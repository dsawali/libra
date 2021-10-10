// import {} from 'dotenv/config.js';
import dotenv from 'dotenv/config.js';

const config = {
  finnhubBaseurl: process.env.FINNHUB_BASE_URL || 'https://finnhub.io/api/v1',
  token: process.env.FINNHUB_TOKEN || 'c0l3j2v48v6und6selvg',
  mongoUrl: process.env.DB_URL || 'mongodb://127.0.0.1:27017',
  isAutomation: false
};

export default config;
