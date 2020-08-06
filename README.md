<h1>Sayu, the bot that speaks for you</h1>

Hello there! This is Sayu, my first ever Discord bot utilizing the Discordjs library. It's a very simple bot that takes a private message from a user and relays it into a channel. The user and the channel IDs are determined in the config.json file in this repo. 

1. [Version History](#section1)
    * [1.1](#1.1)
    * [1.0](#1.0)
2. [Config Setup](#section2)
3. [Possible Future Features](#section3)

<h2 id="section1">Version History</h2>

<h3 id="1.1">1.1; 08/06/2020</h3>

* Now can send a message to multiple channels as defined in a config.json
    * Command prefix is `!`
    * Has `!help` command which lists all commands for channels automatically!
* Command previx is required to function

<h3 id="1.0">1.0; Initial Version</h3>

* Accepts a message from a user defined in `config.json` and delivers it to a specified channel in the server it is invited to.

<h2 id="section2">Config Setup</h2>

You will need a configuration file for this bot, its location and format depending on where you host it. Currently it is configured to be hosted locally from a JSON file. Here's how to do that

In the same folder you have `index.js` and this file, add a folder and name it `config`. CASE MATTERS
In this folder, make a file called `config.json`, CASE ALSO MATTERS.
Inside `config.json`, copy and paste this text:
```JSON
    {
    "TOKEN": "",
    "USERID": "",
    "CHANNELS": [
        {"name": "first_example", "id": ""},
        {"name":"second_example", "id": ""}
    ]
}
```

Let me go over real quick what each of these fields mean:

* `"TOKEN"`: The bot token, this is created when you make a new bot user. You are required to make a bot user if you want to host it. [Here's a tutorial on how to do that](https://discordpy.readthedocs.io/en/latest/discord.html).
* `"USERID"`: The ID of the user who the bot will be listening to. Currently Sayu only accepts input from one user at a time. In order to get this ID, you will need to activate [Discord's developer mode](https://discordia.me/en/developer-mode#:~:text=Enabling%20Developer%20Mode%20on%20Desktop,the%20toggle%20to%20enable%20it.).
* `"CHANNELS"`: This one seems a bit complicated but it's actually really simple. Notice the curly braces ( {} )? The contents of each pair of curly braces is an `object`, and in this case, each of these objects signify a channel in the server that Sayu can talk in. (Fun fact, the `"TOKEN"`, `"USERID"`, and `"CHANNELS"` are all objects as well!). Each of those requires two data parameters:
    - `"name"`: This can be anything, but I recommend keeping it short and distinctive as this will also serve as the command prefix for the command to post in a channel
    - `"id"`: The ID of the channel, this is acquired the same way as you did with `"USERID"`;

You can add as many channels as you want, but you have to make sure that each one is formatted the exact same way.

**WARNING**: All data **MUST** be kept within the quotation marks, or else you will run into errors. 

And with that, you should be finished! Enjoy Sayu!

<h2 id="section3">Possible Future Features</h2>

* Configurable initialization messages
* Alerts linked user when mentioned
* Allow to do mentions
* Emoji support
* Image/Gif support
