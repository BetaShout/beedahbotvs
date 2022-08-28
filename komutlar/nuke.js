const dc = require("discord.js")
exports.run = async(client, message, args) => {
  if(!message.member.hasPermission("ADMİNİSTRATOR")) return;
  let channelp = message.channel.parentID
 message.channel.delete(message.channel).then
  message.channel.clone().then(z => {
    let kanal = z.guild.channels.cache.find(c => c.name === z.name)
    kanal.setParent(
    kanal.guild.channels.cache.find(channel => channel.id === channelp))
    const embed = new dc.MessageEmbed()
    .setTitle("Bu Kanal Nukelendi!")
    .setColor("ORANGE")
    .setImage("https://cdn.discordapp.com/attachments/1010467927608270878/1010987063820161154/destory-eexplode.gif")
    z.send(embed)
    })
  };
exports.conf = {
  enabled: true,
  guildonly: false,
  aliases: ["nuke"],
  permLevel: 0
}
exports.help = {
  name: "nuke"
  }