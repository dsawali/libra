const Discord = require('discord.js');

const createLookupEmbed = (data) => {
  const lookupEmbed = new Discord.MessageEmbed()
    .setColor('#0099ff')
    .setTitle('Showing you the top 5 results: ')
    .addFields(data)

  return lookupEmbed;
}

module.exports = {
  createLookupEmbed
}