const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/search/:query', async (req, res) => {
  try {
    const query = req.params.query;
    const headers = {
      'X-Finnhub-Token': 'c0l3j2v48v6und6selvg',
    };
    const response = await fetch(`https://finnhub.io/api/v1/search?q=${query}`, { method: 'GET', headers });
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
      'X-Finnhub-Token': 'c0l3j2v48v6und6selvg',
    };
    const response = await fetch(`https://finnhub.io/api/v1/quote?symbol=${symbol}`, { method: 'GET', headers });
    const data = await response.json();

    res.send(data);
  } catch (e) {
    res.status(500).send(`ERROR RECEIVED: ${e}`);
  }
});

module.exports = router;