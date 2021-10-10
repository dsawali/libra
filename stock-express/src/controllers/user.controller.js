import User from '../models/user.model.js';

import { validateStock } from '../utils/stock.util.js';
import { getResponseJSON } from '../utils/common.util.js';
import { generateNewHoldings } from '../utils/user.util.js';

import { STATUS_CODE } from '../constants/constants.js';
import config from '../configs/config.js';

const UserController = {
  createUser: async (req, res) => {
    const userExists = await User.getUser(req.body.userId);
    if (userExists) {
      return res
        .status(STATUS_CODE.CONFLICT)
        .send({ err: 'Error: User already exists' });
    }

    const newUserData = req.body;
    try {
      const response = await User.createNewUser(newUserData);
      return res.status(STATUS_CODE.CREATED).send(response);
    } catch (e) {
      return res
        .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .send(`Error creating User: ${e}`);
    }
  },

  findUser: async (req, res) => {
    let response;
  
    try {
      response = await User.getUser(req.params.id);
      if (!response) {
        return res.status(STATUS_CODE.NOT_FOUND).send(`Not Found`);
      }
    } catch (e) {
      return res
        .status(STATUS_CODE.INTERNAL_SERVER_ERROR)
        .send(`Error getting user: ${e}`);
    }
  
    return res.status(STATUS_CODE.OKAY).send(response);
  },

  buyStock: async (req, res) => {
    const { symbol, amount } = req.body;
    const id = req.params.id;
    /**
     *  Validate stock exists
     */
    try {
      const { isValid } = await validateStock(symbol);
      if (!isValid) {
        return res
          .status(STATUS_CODE.OKAY)
          .send({ error: `Ticker does not exist for: ${symbol}` });
      }
    } catch (e) {
      return res.status(STATUS_CODE.INTERNAL_SERVER_ERROR).send(e.message);
    }
  
    /** 
     *  Grab current stock price from FinnHub
     */
    const { error, status, data } = await getResponseJSON(
      `${config.finnhubBaseurl}/quote?symbol=${symbol}`
    );
    const currentStockPrice = data.c;
    const totalCost = amount * currentStockPrice;
    
    const { cash, holdings } = await User.getUser(req.params.id);
    
    if (cash < totalCost) {
      return res
        .status(STATUS_CODE.OKAY)
        .send(
          `You do not have enough funds to purchase ${amount} shares of ${symbol}`
        );
    }
  
    /**
     *  Generate new holdings object to replace current model with
     */
    const newHoldings = generateNewHoldings(amount, symbol, currentStockPrice, holdings);
    const cashAfterPurchase = cash - totalCost;
  
    try {
      await User.updateHoldings(id, newHoldings);
      await User.updateCash(id, cashAfterPurchase)
    } catch (e) {
      return res
        .status(STATUS_CODE.NOT_FOUND)
        .send(`Was not able to update your holdings ${e}`);
    }
    return res
      .status(STATUS_CODE.OKAY)
      .send(`Successfully purchased ${amount} shares of ${symbol}`);
  },
};

export default UserController;
