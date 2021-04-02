const Discord = require('discord.js');

const createWatchEmbed = (user, ticker) => {
  const watchEmbed = new Discord.MessageEmbed()
    .setColor('#29eb1e')
    .setDescription(`**@${user}** added **${ticker}** to the watchlist :moneybag:`)
  return watchEmbed;
}

module.exports = {
  createWatchEmbed
}