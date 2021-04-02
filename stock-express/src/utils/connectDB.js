import mongoose from 'mongoose';
import config from '../config/config.js';

mongoose.Promise = global.Promise;

export const connectDB = () => {
  mongoose.connect('mongodb://localhost:27017/iSight', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    keepAlive: true,
  });
  mongoose.connection.on('connected', () => {
    console.log('Connected to DB');
  });
  mongoose.connection.on('error', (err) => {
    console.log('Connection error', err);
  });
  mongoose.connection.on('disconnected', () => {
    console.log('Connection disconnected');
  });

  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('Connection to DB is closed forcefully');
      process.exit(0);
    });
  });
};

export const closeDB = () => {
  mongoose.connection.close(() => {
    console.log('Connection closed');
    process.exit(0);
  });
};
