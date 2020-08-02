const botconfig = require("./botconfig.json");

module.exports = {
    name: "embed",
    category: "embed",
    description: "Embedder din besked",
    run: async(bot, message, args, Discord, con) => {
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