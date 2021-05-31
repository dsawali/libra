const Discord = require('discord.js');

const createLookupEmbed = (data) => {
  const lookupEmbed = new Discord.MessageEmbed()
    .setColor('#29eb1e')
    .setTitle('Showing you the top 5 results: ')
    .addFields(data);

  return lookupEmbed;
};

module.exports = {
  createLookupEmbed,
};
