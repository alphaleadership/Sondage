const CLEAR_MESSAGES = '!clearMessages';
const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = ".";

client.on('ready', () => {
    console.log('I am ready!');
});
client.on("ready", () => {
    console.log("Connexion en cours ...");
});
client.on("ready", () => {
console.log(`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`); 
client.user.setActivity(`Patch de OverBot`);
});
client.on(`message`, message =>{
    if(message.content.startsWith(prefix + "patch")) {
        message.delete()
        if(!message.guild.member(message.author).hasPermission("ADMINISTRATOR")) return message.channel.send("Vous n'avez pas accès à cette commande, seul les administrateur on accès à cette commande!");
     const embed = new Discord.RichEmbed()		
     .setColor(0x954D23)		
     .setTitle("Patch/Mise à jour :")		 
     .addField("Mise à jour du 13/03/19 :","Suite à la demande de plusieurs utilisateurs, le statu du bot est maintenant : joue à taper &help +nombre de serveurs")
     .addField("Commande retiré :","La commande &ping à été retiré pour une courte durée (elle reviendra normalement à la prochaine mise à jour")
     .addField("mention","@Notife")
     .addField("Mise à jour du 15/03/19","Une commande à été rajouter, la commande &sondage")
     .setFooter(`Bot crée par ⏳Gaétan#2852`)
     message.channel.send({embed})
    message.channel.send(`${message.mentions.roles.first()}`)
    });
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
