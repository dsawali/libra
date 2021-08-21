import Mongoose from 'mongoose';

const HoldingsSchema = new Mongoose.Schema({
  symbol: {
    type: String,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  averageCost: {
    type: Number,
  },
  totalCost: {
    type: Number,
  },
  currency: {
    type: String,
  },
});

const HistorySchema = new Mongoose.Schema({
  symbol: {
    type: String,
  },
  amount: {
    type: String,
  },
  cost: {
    type: Number,
  },
  currency: {
    type: String,
  },
  timestamp: {
    type: Date,
  },
  transactionType: {
    type: String,
  },
});

const UserSchema = new Mongoose.Schema({
  userTag: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
  watchlist: {
    type: Array,
  },
  holdings: {
    type: [HoldingsSchema],
  },
  cash: {
    type: Number,
  },
  history: {
    type: [HistorySchema],
  },
});

let UserModel = Mongoose.model('User', UserSchema);

const User = {
  createNewUser: async (data) => {
    return UserModel.create({
      userTag: data.userTag,
      userId: data.userId,
      cash: 10000
    });
  },
  getUser: async (id) => {
    return UserModel.findOne({ userId: id });
  },
  updateHoldings: async(id, holdings) => {
    return UserModel.findOneAndUpdate({ userId: id }, { holdings: holdings });
  },
  updateCash: async(id, amount) => {
    return UserModel.findOneAndUpdate({ userId: id }, { cash: amount });
  }
};

export default User;
