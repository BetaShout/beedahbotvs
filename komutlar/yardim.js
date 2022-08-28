const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');
let prefix = ayarlar.prefix


module.exports.run= async(client, message, args) => {
   
let embed = new Discord.MessageEmbed()
.setTitle(client.user.username+" Yardım Menüsü")
.setColor("BLUE")
.setThumbnail(client.user.avatarURL())
.setDescription(`
  ▬▬▬▬▬▬▬▬ \`\`\📣Bilgilendirme📣\`\`\ ▬▬▬▬▬▬▬▬
> :bell:\`${prefix}istatistik\` **:: Bot Hakkında Bilgileri Görürsünüz.**                                    



> :scroll:**Şuan Kullanılan Prefix =** \`${prefix}\`**


> :scroll:** Kaç Tane Komut Olduğunu gösterir = :reminder_ribbon:${prefix}toplamkomut **


> :scroll:**Malafat-Ül Hüsamettinin kaç cm olduğunu gösterir = :reminder_ribbon:${prefix}kaçcm **


> :scroll:**Yapımcımın hangi haşmetli olduğunu gösterir =  :reminder_ribbon:${prefix}yapımcım **


> :scroll:** Sana Tokenimi veririm :coin:  = :reminder_ribbon:${prefix}token  **


> :scroll: ** Üyeleri sayar  = :reminder_ribbon:${prefix}say  **


> :scroll:** Aykut Elmasın salak hee salak hee he  vinenin gifini atarsın eğer sana gönderildiyse üzülme ben seni seviyorum :heart: = :reminder_ribbon:${prefix}salak**


> :scroll:** Gecikmemi gösterir  :sleeping:  = :reminder_ribbon:${prefix}ping **


> :scroll:** Sizi tıpkı BetaShout gibi kral yapar Ben:heart: BetaShout = :reminder_ribbon:${prefix}kralol  **


> :scroll:** Dünyadan soğumanı sağlayan espriler yapar - Dünyadan soğumanı sağlayan laflar sokar  = :reminder_ribbon:${prefix}espiri ---${prefix}lafat @Kullanıcı   **


> ::scroll:** Etiketlediğiniz kişinin avatarını gösterir =  :reminder_ribbon: ${prefix}avatar @kullanıcı**


> :scroll:** Sizin ile belirli bir kullanıcı arasında yazan kazanır etkinliği başlatır = :reminder_ribbon:${prefix}yazankazanır @kullanıcı **


> :scroll:** Davet Linkimi Gönderir = :reminder_ribbon: ${prefix}davet**


> :scroll:** Çalışıp Çalışmadığımı Test Edersin = :test_tube: ${prefix}test **


> :scroll:** Kedi gifi atar = :cat: ${prefix}kedi **


> :scroll:** Sunucudaki Toplam üyeleri gösterir = :people_hugging: ${prefix}üyedurum **


> :scroll:** Sunucu Resmini Gösterir - Sunucu Bilgisini Verir=:reminder_ribbon: ${prefix}!sunucuresmi - ${prefix}sunucubilgi **


> :scroll:** Yetkili Komutlarını gösterir= :hammer: ${prefix}yetkili ** 


> :scroll:** Adam gibi adam gifi atar : :man: ${prefix} man **


> :scroll:** Bulunduğunuz Kanala Nukeler : :bomb: ${prefix}nuke **


> :scroll:** Oylama yapar :  :newspaper: ${prefix} oylama < Oylamasını yapacağınız şey > **


> :scroll:** Türk milliyetçisi gifi atar :flag_tr: ${prefix}türk**


> :scroll:** Haha Woman : :woman: ${prefix}woman**  


> :scroll:** Bu Sunucudaki yetkilerinizi görürsünüz: :newspaper: ${prefix}yetkilerim **


> :scroll:** Stres çarkı çevirir : :arrows_counterclockwise: ${prefix}stresçarkı**


> :scroll:** Sorduğunuz soruya cevap verir : :grey_question: ${prefix}sor <soru>**


> :scroll:** Etiketlediğiniz kişi ve sizin aranızda bir düello başlatır : :crossed_swords: ${prefix}düello - 1vs1 @kullanıcı**


> :scroll:** Efkar seviyenizi ölçer : :smoking: ${prefix}efkarım**


> :scroll:** Bulduğunuz bugları bildirmenizi sağlar : :space_invader: ${prefix}bugbildir **


> :scroll:** Balık tutar : :fishing_pole_and_fish: ${prefix}balıktut**


> :scroll:** Polisi arar : :oncoming_police_car: ${prefix}ara155**


> :scroll:** Hayvan görseli atar : :dog: :cat: ${prefix}animal**


> :scroll:** A101 Harca harca bitmez : ${prefix}a101**


> :scroll:** etiketlediğiniz kişi ve siz arasındaki büyük aşkı ölçer : :heart: ${prefix}aşkölçer**


> :scroll:** Oy linkimden oy verebilirsiniz  : :envelope:  ${prefix}oylinkim**


> :scroll:** Belirttiğiniz konu hakkında oylama yapar: :ballot_box: ${prefix}oylama **


> :scroll:** Ne kadar süredir çalıştığımı gösterir : :clock12: ${prefix}çalışma-süresi **


> :reminder_ribbon:**KOMUTLAR YAPIM AŞAMASINDA OLDUĞU İÇİN GÜN GEÇTİKÇE GELİŞECEK BİR BOTUM VE SİZDE BU GELİŞİMİNE GELMESİNİ İSTEDİĞİNİZ ŞEYLERİ ÖZELDEN BELİRTEREK ORTAK OLABİLİRSİNİZ **_@kvpyukselis - BetaShout#2421_:reminder_ribbon:''
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
:white_small_square:\`${prefix}yetkilerim\` **:: bu sunucuda ne kadar yetkiniz olduğunu görürsünüz.**
:white_small_square:  (**>> Destek Sunucusu İçin [Buraya Tıkla](https://discord.gg/gfctPngwPp)**<< )

`)

message.channel.send(embed)
}
module.exports.conf = {
aliases: ['help']
}

module.exports.help = {
  name: "yardım",
  description: "",
  usage: "yardim"
};