const botconfig = require("../../botconfig.json");
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

// __  __           _        _              ____          _        _  _   _  _    ___  _  _     __  
//|  \/  |         | |      | |            / __ \        (_)     _| || |_| || |  / _ \| || |   / /  
//| \  / | __ _  __| | ___  | |__  _   _  | |  | |___ ___ _  ___|_  __  _| || |_| | | | || |_ / /_  
//| |\/| |/ _` |/ _` |/ _ \ | '_ \| | | | | |  | / __/ __| |/ _ \_| || |_|__   _| | | |__   _| '_ \ 
//| |  | | (_| | (_| |  __/ | |_) | |_| | | |__| \__ \__ \ |  __/_  __  _|  | | | |_| |  | | | (_) |
//|_|  |_|\__,_|\__,_|\___| |_.__/ \__, |  \____/|___/___/_|\___| |_||_|    |_|  \___/   |_|  \___/ 
//                                  __/ |                                                           
//    