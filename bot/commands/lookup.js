const util = require('../utils/common.util');
const lookupEmbed = require('../embeds/lookup.embed');

const fieldify = (data) => {
  let result = [];
  data.forEach(item => {
    result.push({ name: `${item.symbol}`, value: `${item.description}` })
  });
  return result
}

module.exports = {
  name: 'lookup',
  description: 'Search company for ticker name',

  execute: async (message, args) => {

    const searchResponse = await util.getSearchJSON(args);
    const data = searchResponse.result.slice(0, 5);
    
    const embedFields = fieldify(data);
    const embed = lookupEmbed.createLookupEmbed(embedFields);

    message.channel.send(embed);
  }
}