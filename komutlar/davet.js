const Discord = require('discord.js');
const client = new Discord.Client();
exports.run = (client, message, args) => {
let embed = new Discord.MessageEmbed()
.setDescription('Beni Davet Etmek İçin https://discord.com/api/oauth2/authorize?client_id=1010304935642017822&permissions=8&scope=bot%20applications.commands)')
message.channel.send(embed)
};
exports.conf = {
enabled: true,
guilOnly: true,
aliases: [],
permlevel: 0
};
exports.help = {
name: 'davet',
usage:'davet'};

