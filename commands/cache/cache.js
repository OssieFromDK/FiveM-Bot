const botconfig = require("./botconfig.json");

module.exports = {
    name: "cache",
    category: "cache",
    description: "Viser en guide til at slette cache",
    run: async(bot, message, args, Discord, Collection) => {
        message.channel.send("Hvordan sletter jeg min cache? ```Find fivem på dit skrivebord > højreklik på det og klik Åben Fil Placering >  Gå ind i Fivem Application Data > Gå ind i Cache > Slet mappen priv > Done!```");
    }
}