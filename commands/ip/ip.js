const botconfig = require("./botconfig.json");

module.exports = {
    name: "ip",
    category: "ip",
    description: "Sender info om IP",
    run: async(bot, message, args, Discord, Collection) => {

        message.channel.send(`__**${botconfig.servernavn}'s IP**__ \n \n${botconfig.serverip} \n \n*Hvordan connecter du hurtigt? Simpelt. * \n \n**F8 » connect ${botconfig.serverip} | Direct Connect » ${botconfig.serverip} » Sæt IPen ind her » Join serveren via Enter eller ved trykke på connect.**`);

    }
}