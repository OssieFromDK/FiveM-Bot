const botconfig = require("../../botconfig.json");
module.exports = {
    name: "ticket",
    category: "ticket",
    description: "ticket system",
    run: async(bot, message, args, Discord, Collection) => {

        message.delete();
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("ingen adgang.");
        let member = message.member;

        let ticketembed = new Discord.RichEmbed()
        .setTitle("Ticket Support")
        .setColor("#32CD32")
        .setDescription("Reager med 🎟️ for at oprette en ny ticket.")
        .setFooter(botconfig.servernavn, botconfig.serverlogo)

    return message.channel.send(ticketembed).then(async msg => {

        await msg.react('🎟️');


        const filter = (reaction, user) => ['🎟️'].includes(reaction.emoji.name) && !user.bot;
        const collector = msg.createReactionCollector(filter);
        collector.on('collect', (reaction, user) => {
            if(reaction.emoji.name == '🎟️') {

                const reactedUser = reaction.users.filter(collectedUser => !collectedUser.bot).first()

                reaction.remove(reactedUser)

                const categoryId = botconfig.ticketcategoryid

                var userName = reactedUser.username;
                var userDiscriminator = reactedUser.discriminator;
        
                var bool = false;
        
                message.guild.channels.forEach((channel) => {
        
                    if (channel.name == userName.toLowerCase() + "-" + userDiscriminator) {
        
                        message.channel.send(`Du har allerede en ticket åben.`).then(msg => msg.delete(5000));
        
                        bool = true;
        
                    }
        
                });
        
        
                if (bool == true) return;
        
        
                    message.guild.createChannel(userName + "-" + userDiscriminator, {
                        type: 'text',
                      }).then((createdChan) => {
        
                        createdChan.setParent(categoryId).then((settedParent) => { 
        
                            settedParent.overwritePermissions(message.guild.roles.find(e => e.name === '@everyone'), { "READ_MESSAGES": false });
                            settedParent.overwritePermissions(message.guild.roles.find(s => s.name === 'Staff'), { 
        
                                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                                "ATTACH_FILES": true, "CONNECT": true,
                                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
        
                             });
        
                            settedParent.overwritePermissions(reactedUser, {
        
                                "READ_MESSAGES": true, "SEND_MESSAGES": true,
                                "ATTACH_FILES": true, "CONNECT": true,
                                "CREATE_INSTANT_INVITE": false, "ADD_REACTIONS": true
        
                            });
        
                    var embedParent = new Discord.RichEmbed()
                        .setTitle(`Ticket`)
                        .setColor("#3498db")
                        .setDescription(`${reactedUser}, stil dit spørgsmål eller skriv din besked her. \n Luk ticketen ved at reagerer med :x:`)
                        .setFooter(reactedUser.username, reactedUser.displayAvatarURL)
                        .setTimestamp();
        
                            settedParent.send(`${reactedUser}`).then(msg => msg.delete(1000));
                            settedParent.send(embedParent).then(async msg => {
                        
                              await msg.react('❌')

                               const filter = (reaction, user) => ['❌'].includes(reaction.emoji.name) && !user.bot;
                               const collector = msg.createReactionCollector(filter);
                               collector.on('collect', (reaction, user) => {
                                if(reaction.emoji.name == '❌') {

                                    const reactedUser = reaction.users.filter(collectedUser => !collectedUser.bot).first();
                        
                                      msg.channel.delete()
                                     var embedCloseTicket = new Discord.RichEmbed()
                                      .setTitle("Ticket: " + reactedUser.username.toLowerCase() + "-" + reactedUser.discriminator)
                                      .setDescription(`Ticket: ${reactedUser.username.toLowerCase()}-${reactedUser.discriminator} blev afsluttet af ${reactedUser}.`)
                                       .setFooter(reactedUser.username, reactedUser.displayAvatarURL)
                                       .setTimestamp();
                        
                                        let logChannel = message.guild.channels.find(r => r.name === botconfig.logchannelname);
                        
                                        logChannel.send(embedCloseTicket);
                         

                              }
                            })

                     }).catch(err => {
                           console.log(err)
                       })
        
                            var embedStartTicket = new Discord.RichEmbed()
                            .setTitle("Ticket: " + reactedUser.username.toLowerCase() + "-" + reactedUser.discriminator)
                            .setDescription(`Ticket: ${reactedUser.username.toLowerCase()}-${reactedUser.discriminator} blev åbnet af ${reactedUser}.`)
                            .setFooter(reactedUser.username, reactedUser.displayAvatarURL)
                            .setTimestamp();
            
                            let logChannel = message.guild.channels.find(r => r.name === botconfig.logchannelname);
            
                            logChannel.send(embedStartTicket);
        
        
                        }).catch(err => {
                            console.log(err)
                        });
        
                    }).catch(err => {
                        console.log(err)
                    });
        

                }
            })

        
        }).catch(err => {
            console.log(err)
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