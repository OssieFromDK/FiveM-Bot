const botconfig = require("./botconfig.json");

module.exports = {
  name: "clear",
  category: "clear",
  description: "Fjerner X antal beskeder",
  run: async(bot, message, args, Discord) => {
          function isNumeric(value) {
              return /^-{0,1}\d+$/.test(value);
          }

          if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("ingen adgang.").then(message.delete()).then(m=> m.delete(2500));
          if (args[0] == "all"){
              if (message.channel.type == 'text') {

                message.channel.fetchMessages()
                  .then(messages => {
                    message.channel.bulkDelete(messages, true);
                    messagesDeleted = messages.array().length;
                    message.channel.send("Beskederne blev slettet. Antal beskeder slettet: "+messagesDeleted).then(msg => msg.delete(2500));
                  })
                  .catch(err => {
                    console.log('Der skete en fejl');
                    console.log(err);
                  });
              }
            } 
          
          else if (isNumeric(args[0])){
              if (message.channel.type == 'text') {
                message.channel.bulkDelete(args[0], true).then(() => {
                  message.channel.send('Slettede '+args[0]+' beskeder!').then(msg => msg.delete(2500));
                })
              } 
          } else {
              message.channel.send('**FEJL!** Rigtigt brug: ```!clear 10```').then(msg => msg.delete(2500));
            }
  }
}