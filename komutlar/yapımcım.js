const Discord = require("discord.js");

exports.run = (client, message, args) => {
  const mrt = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setDescription("**☄️ Yapımcım : O HAŞMETLİ YAPIMCIM BETASHOUT**")
    .setFooter(" BetaShout ") 
  message.channel.send(mrt);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yapımcım",
  description: "",
  usage: ""
};