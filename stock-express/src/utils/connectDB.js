import mongoose from 'mongoose';
import config from '../config/config.js';

export const connectDB = (dbName = 'libra') => {
  mongoose.connect(`${config.mongoUrl}/${dbName}`, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false });

  mongoose.connection.on('connected', () => { console.log('Connected to', dbName, 'DB') });
  mongoose.connection.on('error', (err) => { console.log('Connection error', err) });
  mongoose.connection.on('disconnected', () => { console.log('Connection disconnected') });

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
