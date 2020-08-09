const botconfig = require("../../botconfig.json");
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

// __  __           _        _              ____          _        _  _   _  _    ___  _  _     __  
//|  \/  |         | |      | |            / __ \        (_)     _| || |_| || |  / _ \| || |   / /  
//| \  / | __ _  __| | ___  | |__  _   _  | |  | |___ ___ _  ___|_  __  _| || |_| | | | || |_ / /_  
//| |\/| |/ _` |/ _` |/ _ \ | '_ \| | | | | |  | / __/ __| |/ _ \_| || |_|__   _| | | |__   _| '_ \ 
//| |  | | (_| | (_| |  __/ | |_) | |_| | | |__| \__ \__ \ |  __/_  __  _|  | | | |_| |  | | | (_) |
//|_|  |_|\__,_|\__,_|\___| |_.__/ \__, |  \____/|___/___/_|\___| |_||_|    |_|  \___/   |_|  \___/ 
//                                  __/ |                                                           
//    