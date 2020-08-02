const botconfig = require("./botconfig.json");

module.exports = {
    name: "hjælp",
    category: "hjælp",
    description: "Viser en hjælpe besked",
    run: async(bot, message, args, Discord, Collection) => {

        let helpembed = new Discord.RichEmbed()
             .setThumbnail(`${botconfig.serverlogo}`)
            .setColor("#521282")
            .addField("**!cache**", "Viser hvordan man sletter sin cache.")
            .addField("**!hjemmeside**", "Viser et link til hjemmesiden.")
            .addField("**!donate**", `Viser hvor man kan donere og støtte ${botconfig.servernavn}.`)
            .addField("**!whitelist**", "Viser hvordan man bliver whitelistet.")
            .addField("**!regler**", "Viser hvor man kan læse reglerne.")
            .addField("**!ck**", "Forklarer hvordan man for PK og CK.")
            .addField("**!server**", "Viser information omkring serveren.")
            .addField("**!ip**", "Viser ipen til serveren.")
            .setFooter(botconfig.servernavn, botconfig.serverlogo);

        return message.channel.send(helpembed);

    }
}