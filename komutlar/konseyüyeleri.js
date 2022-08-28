const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix


module.exports.run= async(client, message, args) => {
   
let embed = new Discord.MessageEmbed()
.setTitle(" Vadi Kılavuzu ")
.setColor("BLACK")
.setThumbnail(client.user.avatarURL())
.setDescription(`

---------- Konsey Üyeleri ----------

>**Baron : Konseyin başıdır konseyle ilgili kararlar ona danışılır, İstediği kişinin kalemini kırar istediği kişiyi yükseltir**

>**İstanbulun Sefiri : İstanbulun Sefiri sefirlik masasından baron tarafından seçilmiş kişilerdir konseyde saygı duyulan kişilerdir, İstanbul ondan sorulur.**

>**Sağ Kolum : Baronun sağ koludur tam yetkileri vardır Baron yokken konsey onlardan sorulur. **

>**Baba : Sefirlik Masasındaki Polatın öldürdüğü Babalardır. **

>**Kabadayı : Mafyalardan önce Mahalleleri korumakla görevli olan kimselerdir şuanda ise konseyin başlarında gelen saygı duyulan üyelerdir.**


>**Dayı : Dayılar konseyin üstlerinde yer almasada saygı duyulan mahallelerinde bir kişinin burnu kanasa kendilerinden sorulan konseyin önemli üyeleridir. **

---------- Konsey Üyeleri ----------


`)

message.channel.send(embed)
}
module.exports.conf = {
aliases: ['help']
}

module.exports.help = {
  name: "konseyüyeleri",
  description: "",
  usage: "konseyüyeleri"
};