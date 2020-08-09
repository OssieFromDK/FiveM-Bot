const botconfig = require("../../botconfig.json");
module.exports = {
    name: "verifymsg",
    category: "verifymsg",
    description: "Embedder din besked",
    run: async(bot, message, args, Discord, Collection) => {
      if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('Du har ikke adgang til dette.').then(msg => msg.delete(5000));

      const embed = new Discord.RichEmbed()
        .setTitle("Verification")
        .setColor("#32CD32")
        .setDescription(botconfig.verifybesked)
        .setFooter(botconfig.servernavn, botconfig.serverlogo)

        return message.channel.send(embed).then(async msg => {

          await msg.react("✅")

          const filter = (reaction, user) => ['✅'].includes(reaction.emoji.name) && !user.bot;
          const collector = msg.createReactionCollector(filter);
          collector.on('collect', (reaction, user) => {
              if(reaction.emoji.name == '✅') {
    
                  const reactedUser = reaction.users.filter(collectedUser => !collectedUser.bot).first()
    
                  let guild = bot.guilds.get(botconfig.serverid)
                  let person = guild.members.get(reactedUser.id)
                  reaction.remove(reactedUser)
                  person.removeRole(botconfig.unverifiedroleid)

              }

          })

        })
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