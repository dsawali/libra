import express from 'express';
import stock from './routes/stock.route.js';
import user from './routes/user.route.js';
import { connectDB, connectTestDB } from './utils/connectDB.js';
import config from './configs/config';

const PORT = 8000;
const app = express();

config.isAutomation ? connectTestDB() : connectDB();

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.use('/stock', stock);
app.use('/user', user);

app.listen(PORT, () => {
  console.log('listening on port:', PORT);
});
