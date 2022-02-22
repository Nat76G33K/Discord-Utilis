const { MessageEmbed } = require("discord.js");

module.exports = (i, ping, cmt, e) => {

   const embed = new MessageEmbed({
      color: i,
      description: 'Your ping is `' + ping + 'ms\`.\n' + cmt[e],
   });

   return embed;

}