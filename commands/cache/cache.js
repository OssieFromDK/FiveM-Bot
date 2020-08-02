const botconfig = require("./botconfig.json");

module.exports = {
    name: "cache",
    category: "cache",
    description: "Viser en guide til at slette cache",
    run: async(bot, message, args, Discord, Collection) => {
        message.channel.send("Hvordan sletter jeg min cache? ```Find fivem på dit skrivebord > højreklik på det og klik Åben Fil Placering >  Gå ind i Fivem Application Data > Gå ind i Cache > Slet mappen priv > Done!```");
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