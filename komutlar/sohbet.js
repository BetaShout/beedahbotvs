const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {


const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle("<a:maple_leaf:742698148329291826> » Shouts Family Sohbet Sistemi <a:maple_leaf:742698148329291826>")
 .setTimestamp()
.setDescription(" **b!sohbet-aç** = Sohbeti açarsınız\n**b!sohbet-kapat** = Sohbeti Kapatırsınız\n")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["s-y"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'sohbet',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'el!havadurumu'
}