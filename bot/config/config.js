require('dotenv').config();

const config = {
  token: process.env.TOKEN,
  baseurl: process.env.BASEURL,
  prefix: process.env.PREFIX
}

module.exports = config;