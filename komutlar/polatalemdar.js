const Discord = require ("discord.js");
exports.run = (client, message) => {
const Embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setImage("https://cdn.discordapp.com/attachments/1011620857501712434/1011697884082749502/polat-memati.gif")
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
    name: 'polatalemdar',
    description: 'Ali Candan', 
    usage: 'polatalemdar'
};