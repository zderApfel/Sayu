
const Discord = require("discord.js");
const config = require("./config/config.json");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.startsWith("ping")) {
    message.channel.send("pong!");
  }
});

client.login(config.token); //Edit token in config.json