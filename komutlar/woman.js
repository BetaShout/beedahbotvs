const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
let replies = ["https://media.discordapp.net/attachments/1010467927608270878/1010985280989311006/women-hahaha-women-memes.gif"]  
let result = Math.floor((Math.random() * replies.length));
let gifembed = new Discord.MessageEmbed()

.setTitle("Woman Gif ;")
.setColor("RANDOM")
.setFooter(`${message.author.tag} `, message.author.avatarURL)
.setImage(replies[result]);

message.channel.send(gifembed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gif-woman','woman-gif','gifwoman','womangif','kadın'],
  permLevel: 0

};

exports.help = {
  name: 'woman',
  description: 'woman',
  usage: 'woman'

};