const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === '!ping') {
    	message.reply('pong');
  	}
if (fromID === me && text.includes("!say") ) { 
    bot.sendMessage({ to: channel, message: txt.replace('!say ','') }); }
    
if (message.author.bot) return;
  if(message.content.indexOf(config.prefix) !== 0) return;
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
