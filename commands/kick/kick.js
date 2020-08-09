const botconfig = require("../../botconfig.json");
module.exports = {
    name: "kick",
    category: "kick",
    description: "Kick en person på discorden",
    run: async(bot, message, args, Discord, Collection) => {

        const member = message.mentions.members.first();
        const kickreason = args.slice(1).join(" ")
    
        if (!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Du har ikke adgang til dette.");
        if (!args[0]) return message.channel.send("Du skal angive en person og en grund.");
    
        if (!member) {
            return message.reply(`Du skal mention det medlem du gerne vil kicke!`);
        }
    
        if (!member.kickable) {
            return message.reply('Denne bruger kan ikke blive kicket!.');
        }
    
            let kickTicket = new Discord.RichEmbed()
            .setTitle("Kick")
            .addField("Kicket Medlem:", member)
            .addField("Grund", kickreason)
            .addField("Kicket af", message.author)
            .setThumbnail(member.user.displayAvatarURL)
            .setFooter(member.user.username, member.user.displayAvatarURL)
            .setTimestamp();
    
            var logChannel = message.guild.channels.find(r => r.name === botconfig.logchannelname);
            if (!logChannel) return message.channel.send("Der findes ikke en **log** kanal.").then(msg => msg.delete(10000))
    
            logChannel.send(kickTicket);
    
            member.user.send(`Hej ${member}, du er blevet kicket fra ${botconfig.servernavn} med grunden: **${kickreason}**. \n\nKicket af: ${message.author}`)
        
            message.delete()
    
    
            return member
            .kick()
            .then(() => message.reply(`${member.user.tag} blev kicket. \n\nGrund: **${kickreason}**.`).then(msg => msg.delete(10000)))
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