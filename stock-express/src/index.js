const express = require('express');
const router = express.Router();

const stock = require('./routes/stock.route');

router.get('/hello', (req, res) => {
  res.send('hello_world');
});

router.use('/stock', stock);

module.exports = router;