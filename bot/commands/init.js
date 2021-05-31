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
    };

    let response;

    try {
      response = await util.post(`${config.baseurl}/user/create`, body);
      if (response.status === 409) {
        message.channel.send(
          createPlainTextEmbed(
            `Error creating user! User @${tag} already initialized! :x:`
          )
        );
        return;
      }
    } catch (e) {
      message.channel.send(
        createPlainTextEmbed(`Error creating user: @${tag} :x:`)
      );
      return;
    }
    if (response.status === 201) {
      message.channel.send(
        createPlainTextEmbed(`Successfully created user: @${tag} :dollar:`)
      );
    }
  },
};
