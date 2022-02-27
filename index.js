const { Client, MessageEmbed, Intents, User } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MEMBERS] });

//Embed imported here
const startEmbedImport = require("./Embeds/StartEmbed");
const PingCMDEmbedImport = require("./Embeds/PingCMDEmbed");
const YoEmbedImport = require("./Embeds/YoEmbed");


var defaultPrefix = "!";

client.login(process.env.TOKEN);


client.on("ready", async () => {

  const embed = startEmbedImport(client.user.username);

  try {
    client.user.setActivity("Nat76 coding myself.", { type: "WATCHING" });
    client.users.fetch('754229847206658160', false).then((user) => user.send({ embeds: [embed] })).catch(err => console.log(err));
  } catch (err) {
    console.log(`Failed to start : ${err}`);
  }

})

client.on("messageCreate", async msg => {

  const cmd = msg.content.slice(1).toLowerCase();
  const args = msg.content.slice(cmd.length + 2);
  const channel = msg.channel;

  if (msg.content.startsWith(defaultPrefix) && msg.channel.type !== "DM" && !msg.author.bot) {

    if (cmd === "ping") {

      const ping = msg.createdTimestamp - Date.now();
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

      const embed = PingCMDEmbedImport(i, ping, cmt, e);

      msg.react("🏓");
      await channel.send({ embeds: [embed] });

    }
  } else if (!msg.content.startsWith(defaultPrefix) && msg.channel.type !== "DM" && !msg.author.bot) {

    if (msg.content === "yo" || "YO" || "Yo" || "yO" || "yo!" || "YO!" || "Yo!" || "yO!" || "yo." || "YO." || "Yo." || "yO.") {

      const embed = YoEmbedImport(msg.author);
      msg.reply({ embeds: [embed] });

    }
  }

})

