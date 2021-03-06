import express from 'express';
import stock from './routes/stock.route.js';
import user from './routes/user.route.js';

import { connectDB, closeDB } from './utils/connectDB.js';

const PORT = 8000;

const app = express();

connectDB();

app.use('/stock', stock);
app.use('/user', user);

app.listen(PORT, () => {
  console.log('listening on port:', PORT)
});
