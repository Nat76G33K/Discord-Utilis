const { MessageEmbed } = require("discord.js");

module.exports = (botName) => {

   const embed = new MessageEmbed({
      color: [0, 255, 0],
      title: "Bot opérationnel",
   });

   return embed;

}
