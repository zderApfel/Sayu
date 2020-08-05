
const Discord = require("discord.js"); //Initialization
const client = new Discord.Client();

const config = require("./config/config.json"); //Configuration file for hidden parameters

//Parameters
const botToken = config.TOKEN; //Bot token
const userID = config.USERID; //Person bot will be listening to messages from 
const chanList = config.CHANNELS;

client.on("ready", () => {
  console.log("Bot has logged in");
  if(client.users.cache.get(userID) != undefined){ //Prevent crash due to invalid userID
    client.users.cache.get(userID).send("I AWAKEN. I can now send messages to multiple channels! Type !channels to see the channels I can send messages to!")
  }
  else{
    console.log("ERROR: User not found! Verify ID and try again");
  }
});

client.on("message", (message) => {
  if(message.author.id == userID && message.channel instanceof Discord.DMChannel){
    let commandSuccess = false;
    if (message.content.startsWith("!") == true){
      if (message.content.startsWith("!help") == true){
        commandSuccess = true;  
        client.users.cache.get(userID).send("This will be a help message");
      }
      else{
        for (x in chanList){
          if (message.content.startsWith(`!${chanList[x].name}`) == true){
            client.channels.cache.get(chanList[x].id).send(message.content);
            commandSuccess = true;
          }
        }
      }
    }
    if (commandSuccess == false){
      client.users.cache.get(userID).send("Sorry, I don't understand you, type !help for the list of commands I can understand");
    }
  }
})

client.login(botToken); //Edit token in config.json

