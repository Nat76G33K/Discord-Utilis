'use strict';

const {Client, MessageEmbed, Intents} = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS]});

var defaultPrefix = "!";

client.login(process.env.token);


client.on("ready", async () => {

  try {
    client.user.setActivity("Nat76 coding myself.", { type: "WATCHING" });
    client.users.fetch(user => user.id === "754229847206658160").createDM().then(dm => dm.send('Sucessfully logged as ' + client.user.tag + ".")).catch(err => console.log(err));
  } catch (err) {
    console.log(`Failed to start : ${err}`);
  }
});

client.on("messageCreate", async msg => {

  if (msg.content.startsWith(defaultPrefix) && msg.channel.type !== "DM" && !msg.author.bot) {

    const cmd = msg.content.slice(1).toLowerCase();
    const channel = msg.channel;

    if (cmd === "ping") {

      const ping = Date.now() - msg.createdTimestamp;
      let i;
      let e;
      const cmt = ["Nice ping :sparkles::sparkles:!", "Rip lags...", "Bruh"]

      if (ping < 100) {
        i = "#40ff00";
        e = 0;
      } else if (ping > 100 && ping < 320) {
        i = "#ff6f00";
        e = 1;
      } else if (ping > 320) {
        i = "#ff0000";
        e = 2;
      }

      const embed = new MessageEmbed().setColor(i).setDescription("Your ping is `" + ping + "ms\`.\n" + cmt[e]);

      msg.react("🏓");
      await channel.send({embeds: [embed]});

    }
  }

})
