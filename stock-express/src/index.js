import express from 'express';
import stock from './routes/stock.route.js';

const PORT = 8000;

const app = express();
const router = express.Router();

router.get('/hello', (req, res) => {
  res.send('hello_world');
});

app.use('/stock', stock);

app.listen(PORT, () => {
  console.log('listening on port:', PORT)
});