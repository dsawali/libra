const express = require('express');
const server = express();

const PORT = 8000;

const endpoints = require('./src');

server.use('/', endpoints);

server.listen(PORT, () => {
  console.log('listening on port:', PORT)
});