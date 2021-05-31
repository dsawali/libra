const Discord = require('discord.js');

const createPlainTextEmbed = (text) => {
  const plainTextEmbed = new Discord.MessageEmbed()
    .setColor('#29eb1e')
    .setDescription(text);
  return plainTextEmbed;
};

module.exports = {
  createPlainTextEmbed,
};
