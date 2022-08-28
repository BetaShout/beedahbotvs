const Discord = require ("discord.js");
exports.run = (client, message) => {
    let deathhcodeteam = new Discord.MessageEmbed()
    .setDescription('Oy Linkim İçin [Buraya Tıkla](https://top.gg/bot/1010304935642017822)')
    message.channel.send(deathhcodeteam)
    };
exports.conf = {
enabled: true, 
    guildOnly: false, 
    aliases: ['oy-linkim'], 
    permLevel: 0 
};
  exports.help = {
    name: 'oy', 
    description: 'Shouts Family', 
    usage: 'oy'
};