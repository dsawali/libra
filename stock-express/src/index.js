import express from 'express';
import stock from './routes/stock.route.js';
import { connectDB } from './utils/connectDB.js';

const PORT = 8000;

const app = express();

connectDB();

app.use('/stock', stock);

app.listen(PORT, () => {
  console.log('listening on port:', PORT)
});
