import Mongoose from 'mongoose';

const UserSchema = new Mongoose.Schema({
  usertag: {
    type: String,
    required: true
  },
  userid: {
    type: String,
  },
  watchlist: {
    type: Array,
  },
  holdings: {
    type: Array,
  },
  cash: {
    type: Number,
  },
  history: {
    type: Array
  },
});

let UserModel = Mongoose.model('User', UserSchema);

UserModel.createUser = async (userData) => {
  return UserModel.collection.insertOne(userData, (err) => {
    if (err) throw new Error('Cannot create model');
  });
}

UserModel.getUser = async (id) => {
  return UserModel.find({});
}

export default UserModel;