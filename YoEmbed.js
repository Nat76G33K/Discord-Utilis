const { MessageEmbed } = require("discord.js");

module.exports = (user) => {

   const embed = new MessageEmbed({
      color: "RANDOM",
      description: `Yo ${user} !\nJ'espère que tu vas bien !`,
   });

   return embed;

}