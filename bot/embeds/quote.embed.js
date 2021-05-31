const Discord = require('discord.js');

const createQuoteEmbed = (data, ticker) => {
  const quoteEmbed = new Discord.MessageEmbed()
    .setColor('#29eb1e')
    .setTitle(`${ticker}`)
    .addFields(
      { name: 'Open price', value: `${data.o}`, inline: true },
      { name: 'Close price', value: `${data.c}`, inline: true },
      { name: 'High of the day', value: `${data.h}` },
      { name: 'Low of the day', value: `${data.l}` },
      { name: 'Previous close', value: `${data.pc}`, inline: true },
      { name: 'Current price', value: `${data.c}`, inline: true }
    );

  return quoteEmbed;
};

module.exports = {
  createQuoteEmbed,
};
