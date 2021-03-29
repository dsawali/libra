import StockModel from '../models/stock.model.js';

export const validateStock = async (symbol) => {
  try {
    const isValid = !!(await StockModel.search(symbol));
    const suggestion = isValid ? [] : await StockModel.findStock(symbol);
    return { isValid, suggestion };
  } catch (e) {
    throw new Error(`Error received from stock quote: ${e.message}`);
  }
}