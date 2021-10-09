import fetch from 'node-fetch';
import { STATUS_CODE } from '../constants/constants.js';
import config from '../configs/config.js';

export const getResponseJSON = async (url) => {
  try {
    const headers = {
      'X-Finnhub-Token': config.token,
    };

    const response = await fetch(url, {
      method: 'GET',
      headers,
    });

    if (!response.ok) {
      return { status: response.status, error: response.statusText };
    }

    const data = await response.json();

    return { status: response.status, data };
  } catch (e) {
    return { status: STATUS_CODE.INTERNAL_SERVER_ERROR, error: e.message };
  }
};
