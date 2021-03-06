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
  insertMany: (entries) => {
    return StockModel.collection.insertMany(entries, (err) => {
      if (err) throw new Error('Cannot create model');
    });
  },
};

export default Stock;
