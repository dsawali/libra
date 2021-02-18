import express from 'express';
import stock from './routes/stock.route.js';

const PORT = 8000;

const app = express();

app.use('/stock', stock);

app.listen(PORT, () => {
  console.log('listening on port:', PORT)
});
