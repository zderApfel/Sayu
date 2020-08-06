
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
    client.users.cache.get(userID).send("I AWAKEN. I can now send messages to multiple channels! Type !help for info!");
  }
  else{
    console.log("ERROR: User not found! Verify ID and try again");
  }
});

client.on("message", (message) => {
  if(message.author.id == userID && message.channel instanceof Discord.DMChannel){
    let command = "";
    if(message.content.startsWith("!") == true){
      command = getCommand(message.content);
      setCommand(command, message.content);
    }
      //client.users.cache.get(userID).send("This will be a help message");
      //client.users.cache.get(userID).send("Sorry, I don't understand you, type !help for the list of commands I can understand");
      //client.channels.cache.get(`channel id`).send("");
  }
})

function getCommand(text){
  let newText = text.split(" ");
  return newText[0];
}

function setCommand(comm, fullMessage){
  if (comm == "!help"){
    return client.users.cache.get(userID).send("This will be a help message");
  }
  for (x in chanList){
    if (comm == `!${chanList[x].name.toLowerCase()}`){
      return client.channels.cache.get(chanList[x].id).send(fullMessage.slice(comm.length + 1));
    }
  }
  client.users.cache.get(userID).send("Sorry, I don't understand you, type !help for the list of commands I can understand");
}

client.login(botToken); //Edit token in config.json

