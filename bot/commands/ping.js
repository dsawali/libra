module.exports = {
  name: 'ping',
  description: 'Ping! Check',
  execute(message, args) {
    message.channel.send('Pong!');
  }
}