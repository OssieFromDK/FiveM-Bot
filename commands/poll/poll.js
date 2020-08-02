const botconfig = require("./botconfig.json");

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