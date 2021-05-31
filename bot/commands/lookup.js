const util = require('../utils/requestHandler.util');
const config = require('../config/config');
const lookupEmbed = require('../embeds/lookup.embed');

const fieldify = (data) => {
  return data.map((item) => ({ name: item.symbol, value: item.description }));
};

module.exports = {
  name: 'lookup',
  description: 'Search company for ticker name',

  execute: async (message, query) => {
    const searchResponse = await util.get(
      `${config.baseurl}/stock/search/${query}`
    );
    const data = searchResponse.data.result.slice(0, 5);

    const embedFields = fieldify(data);
    const embed = lookupEmbed.createLookupEmbed(embedFields);

    message.channel.send(embed);
  },
};
