const Discord = require('discord.js');

const createWatchEmbed = (user, ticker) => {
  const watchEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setDescription(`**${user}** added **${ticker}** to the watchlist :moneybag:`)
  return watchEmbed;
}

module.exports = {
  createWatchEmbed
}