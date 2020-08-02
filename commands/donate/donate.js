const botconfig = require("./botconfig.json");

module.exports = {
    name: "donate",
    category: "donate",
    description: "Viser information omkring donation",
    run: async(bot, message, args, Discord, Collection) => {
            let støtembed = new Discord.RichEmbed()
                 .setThumbnail(`${botconfig.serverlogo}`)
                .setColor("#521282")
                .addField(`**Ønsker du at støtte ${botconfig.servernavn}?**`, `Dette kan gøres [her](${botconfig.patreonlink} "${botconfig.servernavn} Patreon") alternativt kan mere info findes [her](${botconfig.donatormessage} "${botconfig.servernavn} Discord").`)
                .setFooter(botconfig.servernavn, botconfig.serverlogo)

            return message.channel.send(støtembed);
    }
}