const botconfig = require("./botconfig.json");

module.exports = {
    name: "hjemmeside",
    category: "hjemmeside",
    description: "Viser hvordan man kommer til hjemmeside",
    run: async(bot, message, args, Discord, Collection) => {

        let hjemembed = new Discord.RichEmbed()
             .setThumbnail(`${botconfig.serverlogo}`)
            .setColor("#521282")
            .addField(`**${botconfig.servernavn}'s hjemmeside**`, `${botconfig.servernavn}'s hjemmeside kan findes [her](${botconfig.website} "${botconfig.servernavn}'s Website").`)
            .setFooter(botconfig.servernavn, botconfig.serverlogo)

        return message.channel.send(hjemembed);

    }
}