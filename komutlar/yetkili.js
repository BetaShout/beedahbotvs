const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix

module.exports.run= async(client, message, args) => {
   
let yardım = new Discord.MessageEmbed()  
.setColor('RANDOM')
.addField('Yetkili Yardım Menü',`
                      MODERASYON
                      
🔔 **${prefix}ban** : Etiketlediğiniz Kullancıyı Sunucudan Yasaklar

🔔 **${prefix}sil** : Mesaj silersiniz (max 100)

🔔 **${prefix}nuke** : Kanalı havaya uçurursunuz

🔔 **${prefix}yavaşmod** : Bulunduğunuz kanalı yavaş moda alır 

🔔 **${prefix}üyedurum** : Üyelerin durumunu gösterir

🔔 **${prefix}mute ** : Etiketlediğiniz kişiyi susturur (BAKIMDA)

🔔 **${prefix}bansay ** : Sunucuda kaç kişi banlı onu gösterir

🔔 **${prefix}id ** : Etiketlediğiniz kullanıcının İDsini verir

🔔 **${prefix}yetkilerim ** : Sunucudaki yetkinizi gösterir

🔔 **${prefix}yardım ** : Daha fazla yardım için  




🔔 ** Gün Geçtikçe gelişen bir bot olduğum için sizinde bu gelişime ortak olmanızı istiyorum tek yapmanız gereken bir sorun bulduğunuz zaman ${prefix}bugbildir komudu ile sorunu bildirmeniz İYİ GÜNLER DİLİYORUM HEPİNİZE - BetaShout#2421 **

                      MODERASYON
`)
  .addField("**» Davet Linki**", " [Botu Davet Et](https://discord.com/api/oauth2/authorize?client_id=787328444954050570&permissions=8&scope=bot)", )
    .setImage("https://cdn.discordapp.com/attachments/821825276232728576/821831310213382264/standard.gif")
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL())
.setThumbnail(client.user.avatarURL())
 message.channel.send(yardım) 
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['help'],
  permLevel: 0
};

exports.help = {
  name: "yetkiliyardım",
  category: "yardım",
    description: "Eğlence Komutları Gösterir."
};