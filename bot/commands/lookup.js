const util = require('../utils/common.util');
const config = require('../config/config');
const lookupEmbed = require('../embeds/lookup.embed');

const fieldify = (data) => {
  return data.map(item => ({ name: item.symbol, value: item.description}));
}

module.exports = {
  name: 'lookup',
  description: 'Search company for ticker name',

  execute: async (message, query) => {

    console.log(config.baseurl)
    const searchResponse = await util.getResponseJSON(`${config.baseurl}/search/${query}`);
    const data = searchResponse.result.slice(0, 5);
    
    const embedFields = fieldify(data);
    const embed = lookupEmbed.createLookupEmbed(embedFields);

    message.channel.send(embed);
  }
}