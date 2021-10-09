import express from 'express';

import { getResponseJSON } from '../utils/common.util.js';
import StockModel from '../models/stock.model.js';
import config from '../configs/config.js';
import { STATUS_CODE } from '../constants/constants.js';

import { validateStock } from '../utils/stock.util.js';

const router = express.Router();

router.get('/search/:query', async (req, res) => {
  try {
    const query = req.params.query;
    const stock = await StockModel.findStock(query);
    res.status(STATUS_CODE.OKAY).send(stock);
  } catch (e) {
    res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).send(`Error received from stock lookup endpoint: ${e.message}`);
  }
});

router.get('/quote/:symbol', async (req, res) => {
  const symbol = req.params.symbol;
  try {
    const { isValid, suggestion } = await validateStock(symbol);
    if (!isValid) {
      return res.status(STATUS_CODE.NOT_FOUND).send({ error: `No data available for stock ${symbol}`, suggestion });
    }
  } catch (e) {
    return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).send(e.message);
  }

  const { error, status, data } = await getResponseJSON(`${config.finnhubBaseurl}/quote?symbol=${symbol}`);
  if (error) {
    return res.status(status).send(`Error received from stock quote endpoint: ${error}`);
  }
  return res.status(status).send(data);
});

export default router;
