const botconfig = require("../../botconfig.json");
module.exports = {
    name: "embed",
    category: "embed",
    description: "Embedder din besked",
    run: async(bot, message, args, Discord, Collection) => {
      message.delete({timeout: 1000});
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Du har ikke adgang til dette.').then(msg => msg.delete(5000));

      if (!args[0]) return message.channel.send('Rigtig Brug: !embed <ting du vil skrive>').then(msg => msg.delete(5000));

      const embed = new Discord.RichEmbed()
        .setColor("#3498db")
        .setDescription(args.join(' '))
        .setFooter(botconfig.servernavn, botconfig.serverlogo)

      let msg = await message.channel.send(embed);

        
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