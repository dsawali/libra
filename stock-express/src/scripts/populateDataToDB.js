import { connectDB, closeDB } from '../utils/connectDB.js';

import config from '../configs/config.js';
import { supportedRegions } from '../constants/constants.js';

import Stock from '../models/stock.model.js';
import { getResponseJSON } from '../utils/common.util.js';

connectDB();

const mergeRegionData = async () => {
  return await supportedRegions.reduce(async (currentData, region) => {
    // Need to wait for the returned merged data
    const mergedData = await currentData;
    const { data } = await getResponseJSON(
      `${config.finnhubBaseurl}/stock/symbol?exchange=${region}`
    );
    mergedData.push(...data);
    return mergedData;
  }, []);
};

const mapData = (rawData) => {
  return rawData
    .filter((data) => !!data.type)
    .map((data) => {
      const { description: companyName, ...otherData } = data;
      return { companyName, ...otherData };
    });
};

const populateDataToDB = async () => {
  try {
    const mergedData = await mergeRegionData();
    const mappedData = mapData(mergedData);
    await Stock.populateDB(mappedData);
  } catch (e) {
    console.log(e.message);
  }
};

populateDataToDB();
