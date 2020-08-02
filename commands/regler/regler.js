const botconfig = require("./botconfig.json");

module.exports = {
    name: "regler",
    category: "regler",
    description: "Sender info omkring regler",
    run: async(bot, message, args, Discord, Collection) => {

        let regelembed = new Discord.RichEmbed()
        .setThumbnail(`${botconfig.serverlogo}`)
       .setColor("#521282")
       .addField(`${botconfig.servernavn}'s regler`, `Du kan læse vores regler [her](${botconfig.reglermessage} "${botconfig.servernavn} regler").`)
       .setFooter(botconfig.servernavn, botconfig.serverlogo);

   return message.channel.send(regelembed);

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