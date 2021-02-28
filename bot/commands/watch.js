const watchEmbed = require('../embeds/watch.embed');

module.exports = {
  name: 'watch',
  description: 'Puts stocks into watchlist',
  execute(message, args) {

    const ticker = args[0].toUpperCase();
    // TODO: call api to add ticker to DB

    const user = message.member.user.tag
    const embed = watchEmbed.createWatchEmbed(user, ticker);
    message.channel.send(embed);
  }
}