import mongoose from 'mongoose';
import config from '../configs/config.js';
import { MongoMemoryServer } from 'mongodb-memory-server';

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

export const connectTestDB = async (dbName = 'libraTest') => {
  const mongoServer = await MongoMemoryServer.create();
  const mongoUri = mongoServer.getUri();

  await mongoose.connect(mongoUri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
  });

  mongoose.connection.on('connected', () => {
    console.log(`Connected to test db: ${dbName}`);
  });

  mongoose.connection.on('error', (err) => {
    console.log(`Connection error: ${err}`);
  });

  mongoose.connection.on('disconnected', () => {
    console.log(`Disconnected from db: ${dbName}`);
  });
}

export const closeDB = () => {
  mongoose.connection.close(() => {
    console.log('Connection closed');
    process.exit(0);
  });
};
