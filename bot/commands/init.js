const util = require('../utils/requestHandler.util');
const config = require('../config/config');
const { createPlainTextEmbed } = require('../embeds/plainText.embed');

module.exports = {
  name: 'init',
  description: 'Initializes a new user',
  execute: async (message) => {
    const tag = message.member.user.tag;
    const id = message.member.user.id;

    const body = {
      userTag: tag,
      userId: id
    }

    const response = await util.get(
      `${config.baseurl}/user/0000000`
    )
    console.log(response);

    try {
      const response = await util.post(
        `${config.baseurl}/user/create`,
        body
      );
      message.channel.send(
        createPlainTextEmbed(`Successfully created user: @${tag} `)
      )
    } catch(e) {
      message.channel.send(
        createPlainTextEmbed(`Error creating user: ${tag} :x:`)
      )
    }
  }
}