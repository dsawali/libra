import express from 'express';

import { getResponseJSON } from '../utils/common.util.js';

import config from '../config/config.js';

const router = express.Router();

router.get('/search/:query', async (req, res) => {
  const query = req.params.query;
  const response = await getResponseJSON(`${config.baseurl}/search?q=${query}`);

  const { error, status, data } = response;
  if (error) {
    res
      .status(status)
      .send(`Error received from stock lookup endpoint: ${error}`);
  }
  res.status(status).send(data);
});

router.get('/quote/:symbol', async (req, res) => {
  const symbol = req.params.symbol;
  const response = await getResponseJSON(
    `${config.baseurl}/quote?symbol=${symbol}`
  );

  const { error, status, data } = response;
  if (error) {
    res
      .status(status)
      .send(`Error received from stock quote endpoint: ${error}`);
  }
  res.status(status).send(data);
});

export default router;
