import express from 'express';
import StockController from '../controllers/stock.controller.js';

const router = express.Router();

router.get('/search/:query', StockController.findStock);

router.get('/quote/:symbol', StockController.getStockPrice);

export default router;
