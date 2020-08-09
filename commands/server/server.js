const botconfig = require("../../botconfig.json");
module.exports = {
    name: "server",
    category: "server",
    description: "Sender information omkring serveren",
    run: async(bot, message, args, Discord, Collection) => {
        http.get(`http://${botconfig.serverip}/players.json`, function(response){
            let json = ""

            response.on("data", function(chunk){
                json += chunk
            })

            response.on("end", function(){
                if(response.statusCode == 200){
                    try {
                        const players = JSON.parse(json)
                    
                    if(botconfig.botspamtoggle === 'true') {
                        if(message.channel.id != `${botconfig.botspamid}`) {
                            message.delete()
                            member.send(`Du kan kun bruge denne kommand i <#${botconfig.botspamid}>`)
                        } else {
                         
                            let serverinfoembed = new Discord.RichEmbed()
                            .setThumbnail(`${botconfig.serverlogo}`)
                            .setColor("#521282")
                            .addField("Server Navn:", `${botconfig.serverlistnavn}`)
                            .addField("Online Spillere:", `${players.length}/60 online`)
                            .addField("IP:", `${botconfig.serverip}`)
                            .setFooter(botconfig.servernavn, botconfig.serverlogo);
    
                            message.delete()
                            return message.channel.send(serverinfoembed).then(msg => msg.delete(20000))

                        }
                    } else {

                        let serverinfoembed = new Discord.RichEmbed()
                        .setThumbnail(`${botconfig.serverlogo}`)
                        .setColor("#521282")
                        .addField("Server Navn:", `${botconfig.serverlistnavn}`)
                        .addField("Online Spillere:", `${players.length}/60 online`)
                        .addField("IP:", `${botconfig.serverip}`)
                        .setFooter(botconfig.servernavn, botconfig.serverlogo);

                        message.delete()
                        return message.channel.send(serverinfoembed).then(msg => msg.delete(20000))

                    }


                    }catch(e){
                        console.log(e)
                    }
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