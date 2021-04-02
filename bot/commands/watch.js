const watchEmbed = require('../embeds/watch.embed');

module.exports = {
  name: 'watch',
  description: 'Puts stocks into watchlist',
  execute: async (message, args) => {

    if (!args) {
      message.channel.send()
    }
    const ticker = args[0].toUpperCase();
    // TODO: call api to add ticker to DB

    const username = message.member.user.tag;
    console.log(username);
    const embed = watchEmbed.createWatchEmbed(username, ticker);
    message.channel.send(embed);
  }
}