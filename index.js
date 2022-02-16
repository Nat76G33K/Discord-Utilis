const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const defaultPrefix = "!";


client.login(process.env.token);


client.on("ready", async () => {

  try {
    client.guilds.cache.get("939857766397395004").channels.cache.get("939931822039638116").send("Ready to work <@754229847206658160> !");
  } catch (err) {
    console.log(`Failed to start : ${err}`);
  }

  console.log("Sucessfully started.");
})

 client.on("messageCreate", async message => {

  if (message.content.startsWith(defaultPrefix) && message.channel !== "DMChannel" || "PartialDMChannel") {

    const command = message.content.slice(1);
    const channel = message.channel;

    if (command === "ping") {
      
      const ping = Date.now() - message.createdTimestamp;
      message.react("🏓");
      channel.send(` Pong !\n\`${ping}ms\``);
      
    }
  }

})
