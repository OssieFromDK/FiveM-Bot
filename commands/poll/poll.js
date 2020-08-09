const botconfig = require("../../botconfig.json");
module.exports = {
    name: "poll",
    category: "poll",
    description: "Laver en simpel poll",
    run: async(bot, message, args, Discord, Collection) => {

        if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Du har ikke adgang til dette.').then(msg => msg.delete(10000));

        if (!args[0]) return message.channel.send('Rigtig Brug: !poll <spørgsmål>');

          const embed = new Discord.RichEmbed()
          .setColor("#521282")
          .setTimestamp()
          .setDescription(`Afstemning startet af ${message.author}`)
          .setTitle(args.join(' '))
          .setFooter(botconfig.servernavn, botconfig.serverlogo);

        let msg = await message.channel.send(embed);

        await msg.react('✅');
        await msg.react('⛔');



        message.delete({timeout: 1000});

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