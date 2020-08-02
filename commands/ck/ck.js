const botconfig = require("./botconfig.json");

module.exports = {
    name: "ck",
    category: "ck",
    description: "Viser hvordan man kan CK",
    run: async(bot, message, args, Discord, Collection) => {
        message.channel.send("CK foregår i en samtale med en CK ansvarlig.");
    }
}