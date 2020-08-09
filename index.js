// __  __           _        _              ____          _        _  _   _  _    ___  _  _     __  
//|  \/  |         | |      | |            / __ \        (_)     _| || |_| || |  / _ \| || |   / /  
//| \  / | __ _  __| | ___  | |__  _   _  | |  | |___ ___ _  ___|_  __  _| || |_| | | | || |_ / /_  
//| |\/| |/ _` |/ _` |/ _ \ | '_ \| | | | | |  | / __/ __| |/ _ \_| || |_|__   _| | | |__   _| '_ \ 
//| |  | | (_| | (_| |  __/ | |_) | |_| | | |__| \__ \__ \ |  __/_  __  _|  | | | |_| |  | | | (_) |
//|_|  |_|\__,_|\__,_|\___| |_.__/ \__, |  \____/|___/___/_|\___| |_||_|    |_|  \___/   |_|  \___/ 
//                                  __/ |                                                           
//                                 |___/                                  

const botconfig = require("./botconfig.json");
const { Client, Collection } = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const http = require("http");
const mysql = require("mysql");
const moment = require("moment");
const { stripIndents } = require("common-tags");
const prefix = botconfig.prefix


const bot = new Client({
    disableEveryone: true
});

bot.commands = new Collection();
bot.aliases = new Collection();

["command"].forEach(handler => {
    require(`./handler/${handler}`)(bot);
});

bot.on('ready', () => {

    try{

        http.get(`http://${botconfig.serverip}/players.json`, function(response){
            let json = ""
        
    
            response.on("data", function(chunk){
                json += chunk
            })
        
    
            response.on("end", function(){
                if(response.statusCode == 200){
                    try {
    
                        const players = JSON.parse(json)


                        let memberCount = bot.guilds.get(botconfig.serverid).members.filter(m => !m.user.bot).size - 1;

                        const activities_list = [
                            ``,
                            `Brug for hjælp? !hjælp`,
                            `${players.length}/64 online`,
                            `${memberCount} medlemmer på ${botconfig.servernavn}`
                        ];

                        console.log(`${botconfig.servernavn}-bot er online!`);

                        setInterval(() => {
                            const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); 
                            bot.user.setActivity(activities_list[index], {
                            type: 'WATCHING'
                        })
        
                    }, 10000);
                }catch(e){
                    console.log(e)
                }
            }
        })
    })
}catch(e) {
    console.log(e)
}
});

bot.on("message", async message =>{
    if (message.author.bot) return;
    if (!message.guild) return;
    if (!message.content.startsWith(prefix)) return;
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    const Discord = require("discord.js");
    const Collection = require("discord.js");

    if (cmd.length === 0) return;

    let command = bot.commands.get(cmd)
    if (!command) command = bot.commands.get(bot.aliases.get(cmd))

    if (command)
        command.run(bot, message, args, Discord, Collection);
});




bot.on("message", async message => {
    if (message.author.bot) return;
    if (message.channel.type === "dm") return;

    var msg = message.content.toUpperCase();

    if (msg.includes('NEGER') || msg.includes('NIBBA') || msg.includes('NIGGA') || msg.includes('N E G E R') || msg.includes('N I G G A') || msg.includes('N I B B A'))  {
        message.delete();
        message.author.send(`Ordet **Neger** er banned fra ${botconfig.servernavn}s Discord.`)
    }

    if (msg.includes('https://discord.gg/')) {
        message.delete();
        message.author.send(`Du bedes ikke reklamere med andre servere på ${botconfig.servernavn}.`)
    }

});

bot.on("guildMemberAdd", member => {

    member.send(`${botconfig.velkomstbesked}`);
    member.addRole(r => r.id === botconfig.unverifiedroleid)

    const joined = moment(member.joinedAt, "unix").format("LTS")
    const created = moment(member.user.createdAt, "unix").format("L")

    let userembed = new Discord.RichEmbed()
    .setFooter(member.displayName, member.user.displayAvatarURL)
    .setThumbnail(member.user.displayAvatarURL)
    .setColor(member.displayHexColor === "#521282" ? "#ffffff" : member.displayHexColor)
    .addField('Medlems Information', stripIndents`**> Display Navn:** ${member.displayName}
    **> Joinede:** ${joined}`, true)

    .addField('Bruger Information', stripIndents`**> ID:** ${member.user.id}
    **> Navn:** ${member.user.username}
    **> Discord Tag:** ${member.user.tag}
    **> Bruger Lavet:** ${created})`)

    .setTimestamp()

    if (member.user.presence.game) {
        userembed.addField('Spiller:', `**> Navn:** ${member.user.presence.game.name}`)
        userembed.addField('Custom Status:', `**> Status:** ${member.user.presence.game.state}`)
    }

    var logChannel = message.guild.channels.find(r => r.name === botconfig.logchannelname);
    if (!logChannel) return message.channel.send("Der findes ikke en **log** kanal.");

    logChannel.send(userembed);

});

bot.on("messageDelete", async message => {
    
    let logs = await message.guild.fetchAuditLogs({type: 72});
    let entry = logs.entries.first()

    try{
    let deleteembed = new Discord.RichEmbed()
    .setFooter(message.author.tag, message.author.displayAvatarURL)
    .setTitle("Besked slettet")
    //.addField("Slettet af", entry.executor)
    .addField("Slettet besked", message.content)
    .addField("Besked af", message.author)
    .addField("Slettet i", message.channel)
    .setColor("#521282")
    .setTimestamp()
    if(entry.executor === message.author){
        deleteembed.addField("Slettet af", message.author)
      } else {
        deleteembed.addField("Slettet af", entry.executor)
      }

      var logChannel = message.guild.channels.find(r => r.name === botconfig.logchannelname);
      if (!logChannel) return message.channel.send("Der findes ikke en **log** kanal.");
  
      logChannel.send(deleteembed);    
    }catch(e){
    }

});

bot.on("messageUpdate", (oldMessage, newMessage) => {
    if(oldMessage.author.bot) return;

    try{
    let editedembed = new Discord.RichEmbed()
    .setFooter(oldMessage.author.tag, oldMessage.author.displayAvatarURL)
    .setTitle("Besked ændret")
    .addField("Ændret af", oldMessage.author)
    .addField("Besked ændret", `"${oldMessage}" → "${newMessage}"`)
    .addField("Besked af", oldMessage.author)
    .addField("Besked ændret i", oldMessage.channel)
    .setColor("#521282")
    .setTimestamp();

    var logChannel = message.guild.channels.find(r => r.name === botconfig.logchannelname);
    if (!logChannel) return message.channel.send("Der findes ikke en **log** kanal.");

    logChannel.send(editedembed);

    }catch(e){
    }

});


bot.login(botconfig.token)

// __  __           _        _              ____          _        _  _   _  _    ___  _  _     __  
//|  \/  |         | |      | |            / __ \        (_)     _| || |_| || |  / _ \| || |   / /  
//| \  / | __ _  __| | ___  | |__  _   _  | |  | |___ ___ _  ___|_  __  _| || |_| | | | || |_ / /_  
//| |\/| |/ _` |/ _` |/ _ \ | '_ \| | | | | |  | / __/ __| |/ _ \_| || |_|__   _| | | |__   _| '_ \ 
//| |  | | (_| | (_| |  __/ | |_) | |_| | | |__| \__ \__ \ |  __/_  __  _|  | | | |_| |  | | | (_) |
//|_|  |_|\__,_|\__,_|\___| |_.__/ \__, |  \____/|___/___/_|\___| |_||_|    |_|  \___/   |_|  \___/ 
//                                  __/ |                                                           
//    