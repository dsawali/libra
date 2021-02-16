import express from 'express';
import fetch from 'node-fetch';

import config from '../config/config.js';


const router = express.Router();

router.get('/search/:query', async (req, res) => {
  try {
    const query = req.params.query;
    const headers = {
      'X-Finnhub-Token': config.token,
    };
    const response = await fetch(
      `${config.baseurl}/search?q=${query}`, 
      { 
        method: 'GET', 
        headers 
      }
    );
    const data = await response.json();

    res.send(data);
  } catch (e) {
    res.status(500).send(`ERROR RECEIVED: ${e}`);
  }
});

router.get('/quote/:symbol', async (req, res) => {
  try {
    const symbol = req.params.symbol;
    const headers = {
      'X-Finnhub-Token': config.token,
    };
    const response = await fetch(
      `${config.baseurl}/quote?symbol=${symbol}`,
      { 
        method: 'GET', 
        headers 
      }
    );
    const data = await response.json();

    res.send(data);
  } catch (e) {
    res.status(500).send(`ERROR RECEIVED: ${e}`);
  }
});

export default router;