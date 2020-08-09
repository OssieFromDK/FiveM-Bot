const botconfig = require("../../botconfig.json");const ms = require("ms");

module.exports = {
    name: "mute",
    category: "mute",
    description: "Muter en person på discorden",
    run: async(bot, message, args, Discord, Collection) => {

        let mutereason = args.slice(2).join(" ")
        if (!mutereason) return message.reply(`du skal angive en grund!`)
        let author = message.author

        let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!tomute) return message.reply("Kunne ikke finde brugeren.");
        if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Denne person kan ikke mutes!");
        let muterole = message.guild.roles.find(r => r.name === "Muted");

        if(!muterole){
          try{
            muterole = await message.guild.createRole({
              name: "Muted",
              color: "#000000",
              permissions:[]
            })
            message.guild.channels.forEach(async (channel, id) => {
              await channel.overwritePermissions(muterole, {
                SEND_MESSAGES: false,
                ADD_REACTIONS: false
              });
            });
          }catch(e){
            console.log(e);
          }
        }


        let mutetime = args[1];
        if(!mutetime) return message.reply("Du skal indstille en tid (s/m/h/d)");
      
        await(tomute.addRole(muterole.id));


        message.reply(`<@${tomute.id}> er blevet muted i ${ms(ms(mutetime))}`).then(msg => msg.delete(10000));


        let muteTicket = new Discord.RichEmbed()
        .setTitle("Mute")
        .addField("Muted Medlem:", tomute)
        .addField("Grund", mutereason)
        .addField("Muted af", message.author)
        .addField("Muted i", mutetime)
        .setThumbnail(tomute.user.displayAvatarURL)
        .setFooter(tomute.user.username, tomute.user.displayAvatarURL)
        .setTimestamp();

        var logChannel = message.guild.channels.find(r => r.name === botconfig.logchannelname);
        if (!logChannel) return message.channel.send("Der findes ikke en **log** kanal.");

        logChannel.send(muteTicket);

        tomute.user.send(`Hej ${tomute}, du er blevet muted i **${mutetime}** af ${author}. \n\nGrund: ${mutereason}`)
      
        setTimeout(function(){
          tomute.removeRole(muterole.id);
          message.channel.send(`<@${tomute.id}> er blevet unmuted!`).then(msg => msg.delete(10000));
        }, ms(mutetime));
        
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