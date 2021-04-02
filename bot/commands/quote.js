const util = require('../utils/requestHandler.util');
const config = require('../config/config');

const quoteEmbed = require('../embeds/quote.embed');

module.exports = {
  name: 'quote',
  description: 'Gets the price quote for a given ticker',
  execute: async (message, args) => {

    const ticker = args[0].toUpperCase();
    const response = await util.get(`${config.baseurl}/stock/quote/${ticker}`);
    const embed = quoteEmbed.createQuoteEmbed(response, ticker);
    message.channel.send(embed);
  }
}