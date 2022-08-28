const Discord = require ("discord.js");
exports.run = (client, message) => {
const Embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setImage("https://cdn.discordapp.com/attachments/942789128771227648/1011949890525462549/twerk-fun.gif")
.setFooter(client.user.username + "", client.user.avatarURL)
.setTimestamp();
return message.channel.send(Embed)
.then; 
};
exports.conf = {
enabled: true, 
    guildOnly: false, 
    aliases: [], 
    permLevel: 0 
};
  exports.help = {
    name: 'twerk', 
    description: 'twerk', 
    usage: 'twerk'
};