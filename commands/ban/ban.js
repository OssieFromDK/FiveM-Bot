const botconfig = require("./botconfig.json");

module.exports = {
    name: "ban",
    category: "ban",
    description: "Banner en person på discorden",
    run: async(bot, message, args, Discord, Collection) => {

        const member = message.mentions.members.first();
        const banreason = args.slice(1).join(" ")
    
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Du har ikke adgang til dette.");
        if (!args[0]) return message.channel.send("Du skal angive en person og en grund.");
    
        if (!member) {
            return message.reply(`Du skal mention det medlem du gerne vil banne!`);
        }
    
        if (!message.member.hasPermission("BAN_MEMBERS")) {
            return message.reply('Denne bruger kan ikke bannes!');
        }
    
            let banTicket = new Discord.RichEmbed()
            .setTitle("Ban")
            .addField("Bannet Medlem:", member)
            .addField("Grund", banreason)
            .addField("Bannet af", message.author)
            .setThumbnail(member.user.displayAvatarURL)
            .setFooter(member.user.username, member.user.displayAvatarURL)
            .setTimestamp();

    
            var logChannel = message.guild.channels.find(r => r.name === botconfig.logchannelname);
            if (!logChannel) return message.channel.send("Der findes ikke en **log** kanal.").then(msg => msg.delete(10000))
    
            logChannel.send(banTicket);

    
            member.user.send(`Hej ${member}, du er blevet bannet fra ${botconfig.servernavn} med grunden: **${banreason}**. \n\nBannet af: ${message.author}`)
        
            message.delete()
    
    
            return member
            .ban()
            .then(() => message.reply(`${member.user.tag} blev bannet. \n\nGrund: **${banreason}**.`).then(msg => msg.delete(10000)))
            .catch(error => message.reply('Der opstod en fejl.'));
        
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