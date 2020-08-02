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

// __  __           _        _              ____          _        _  _   _  _    ___  _  _     __  
//|  \/  |         | |      | |            / __ \        (_)     _| || |_| || |  / _ \| || |   / /  
//| \  / | __ _  __| | ___  | |__  _   _  | |  | |___ ___ _  ___|_  __  _| || |_| | | | || |_ / /_  
//| |\/| |/ _` |/ _` |/ _ \ | '_ \| | | | | |  | / __/ __| |/ _ \_| || |_|__   _| | | |__   _| '_ \ 
//| |  | | (_| | (_| |  __/ | |_) | |_| | | |__| \__ \__ \ |  __/_  __  _|  | | | |_| |  | | | (_) |
//|_|  |_|\__,_|\__,_|\___| |_.__/ \__, |  \____/|___/___/_|\___| |_||_|    |_|  \___/   |_|  \___/ 
//                                  __/ |                                                           
//    