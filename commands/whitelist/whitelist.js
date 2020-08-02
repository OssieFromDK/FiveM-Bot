const botconfig = require("./botconfig.json");

module.exports = {
    name: "whitelist",
    category: "whitelist",
    description: "Forklarer omkring whitelist",
    run: async(bot, message, args, Discord, Collection) => {

        let whitelistembed = new Discord.RichEmbed()
        .setThumbnail(`${botconfig.serverlogo}`)
        .setColor("#521282")
        .addField(`${botconfig.servernavn}'s Whitelist`, `Du kan læse om whitelist [her](${botconfig.whitelistmessage} "${botconfig.servernavn} whitelist").`)

    return message.channel.send(whitelistembed);

    }
}