exports.run = async (client, msg, args) => {


    let ask=[
      "Aşkölçer %3 Gösteriyor.",
      "Aşkölçer %6 Gösteriyor.",
      "Aşkölçer %9 Gösteriyor.",
      "Aşkölçer %12 Gösteriyor.",
      "Aşkölçer %18 Gösteriyor.",
      "Aşkölçer %20 Gösteriyor.",
      "Aşkölçer %23 Gösteriyor.",
      "Aşkölçer %26 Gösteriyor.",
      "Aşkölçer %29 Gösteriyor.",
      "Aşkölçer %0 Gösteriyor. ",
    ]
      let member = msg.mentions.members.first()
     if(!member)return msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: ('🚫 Kimi Sevdiğini etiketlemelisin..')
  }});
 
 
 
    else{
    msg.channel.send({embed: {
   color: Math.floor(Math.random() * (0xFFFFFF + 1)),
   description: (`${member} ${ask[Math.floor(Math.random() * 30)]}.`)
    }})
    }
 
 
  }
 
  exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0
   };
 
  exports.help = {
    name: 'askölçer',
    description: 'Aşk Ölçmeni sağlar.',
    usage: 'askölçer'
   }