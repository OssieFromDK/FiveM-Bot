const botconfig = require("./botconfig.json");

module.exports = {
    name: "regler",
    category: "regler",
    description: "Sender info omkring regler",
    run: async(bot, message, args, Discord, Collection, con) => {

        let regelembed = new Discord.RichEmbed()
        .setThumbnail(`${botconfig.serverlogo}`)
       .setColor("#521282")
       .addField(`${botconfig.servernavn}'s regler`, `Du kan læse vores regler [her](${botconfig.reglermessage} "${botconfig.servernavn} regler").`)
       .setFooter(botconfig.servernavn, botconfig.serverlogo);

   return message.channel.send(regelembed);

    }
}