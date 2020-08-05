
const Discord = require("discord.js"); //Initialization
const client = new Discord.Client();

const config = require("./config/config.json"); //Configuration file for hidden parameters

//Parameters
const botToken = config.TOKEN; //Bot token
const userID = config.USERID; //Person bot will be listening to messages from 
const channels = config.CHANNELS;

client.on("ready", () => {
  console.log("Bot has logged in");
  if(client.users.cache.get(userID) != undefined){ //Prevent crash due to invalid userID
    client.users.cache.get(userID).send("I AWAKEN. Say what you want me to say. NOTE: I currently cannot send emojis, but hopefully I can in the future :)");
  }
  else{
    console.log("ERROR: User not found! Verify ID and try again");
  }
});

client.on("message", (message) => {
  client.channels.cache.get(config.CHANNELS)
  if(message.author.id == userID && message.channel instanceof Discord.DMChannel){
    if (message.content.includes("!help") == true){
      client.users.cache.get(userID).send("This will be a help message");
    }
    else {
      //sendTo.send(message.content);
    }
  }
})

client.login(botToken); //Edit token in config.json

