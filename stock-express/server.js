const express = require('express');
const server = express();

const PORT = 8000;

server.listen(PORT, () => {
    console.log('listening on port:', PORT)
});