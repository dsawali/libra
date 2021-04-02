import mongoose from 'mongoose';

const MODEL_NAME = 'stock';

const StockModelSchema = new mongoose.Schema({
  displaySymbol: {
    type: String,
  },
  companyName: {
    type: String,
    required: true,
  },
  currency: {
    type: String,
    required: true,
  },
  figi: {
    type: String,
  },
  mic: {
    type: String,
  },
  symbol: {
    type: String,
    required: true,
  },
  type: {
    type: String,
  },
});

const StockModel = mongoose.model(MODEL_NAME, StockModelSchema);


const Stock = {
  populateDB: (entries) => {
    return StockModel.collection.insertMany(entries);
  },

  findStock: (query) => {
    const escapedQuery = query.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
    const regex = new RegExp(escapedQuery, 'gi');
    return StockModel.collection.find({ $or: [{ symbol: regex }, { companyName: regex }] }).toArray();
  },

  search: (symbol) => {
    return StockModel.collection.findOne({ symbol });
  },
};

export default Stock;
