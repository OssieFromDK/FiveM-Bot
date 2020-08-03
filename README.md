# FiveM-Bot
FiveM Discord Bot

## Opsætning

### Version

Ja, botten kører på 11.5.1 og er for doven til at skulle lave den om til v12. Når de dræber 11.5.1 skal jeg nok opdatere den, ellers må i selv lette røven og gøre det :D

### Node.js
Du skal have [Node.js](https://nodejs.org/) for at kunne køre de følgende kommandoer.

### Modules

Åben et [Powershell](https://www.partitionwizard.com/clone-disk/windows-open-powershell-in-a-folder.html) vindue i folderen og skriv følgende:

```sh
npm i
```

### Botconfig

| config | funktion |
| ------ | ------ |
| Token | Discord bot token fra https://discord.com/developers |
| Prefix | Bottens prefix |
| Servernavn | Din servers navn |
| Serverip | Ipen til din server |
| Serverlogo | Et DIRECT link til dit logo, jeg anbefaler imgur. Eksempel: https://i.imgur.com/npq9NMg.jpg |
| Serverid | Din discord servers ID, guide: https://support.discord.com/hc/da/articles/206346498-Hvor-kan-jeg-finde-mit-Bruger-Server-Besked-ID- |
| Botspamtoggle | Gør så man kun kan bruge !server kommandoen i botspamid kanalen, sæt den til "true" eller "false" |
| Botspamid | Bot-spam kanal id på din discord server |
| Serverlistnavn | Navnet på din server på server listen |
| Whitelistmessage | Et message link til jeres besked omkring whitelist, guide: Find beskeden, højre klik, Copy Message Link |
| Reglermessage | Et message link til jeres regler |
| Patreonlink | Et link til jeres patreon |
| Donatormessage | Et message link til jeres besked om donationer |
| Website | Jeres hjemmeside |
| Ticketcategoryid | Den kategori på jeres discord som tickets skal blive oprettet i, guide: https://support.discord.com/hc/da/articles/206346498-Hvor-kan-jeg-finde-mit-Bruger-Server-Besked-ID-, man gør det bare med kategorien istedet |
| Velkomstbesked | En besked der bliver sendt i DM til den nye person der joiner, ${member} tagger brugeren, brug \n til at gå til næste linje. |
| Verifybesked | Den besked der står i jeres verifications embed |
| Unverifiedroleid | ID på jeres unverified rolle |
| Logchannelname | Navn på den kanal hvor botten vil sende logs til |

### Bannede ord

Du kan ændre, tilføje eller fjerne bannede ord ved linje #109 i index.js

### Verification og Ticket

Når i skal sætte verification og ticket op skal i blot gå i de kanaler i vil have det i og bruge kommandoen til dem (!verifymsg, !ticket)

### Fjernelse af kommandoer

Hvis du ikke ønsker nogle af de kommandoer der er kan du blot fjerne mappen fra [commands/][PlDb]

### Starte botten

Når du så vil starte den kan du bruge powershell vinduet og skrive "node index.js" eller lave en start.bat
Hvis du vælger at lave en start.bat så skriv følgende:
> node index.js
> pause

## Copyright

Du skal være velkommen til at bruge min kode til din egen bot, det ville jeg syntes var fedt, men du må IKKE re-release min kode uden min tilladelse, hver også gerne så venlig ikke at fjerne watermarks :) Hvis du har nogen spørgsmål eller du gerne vil release noget hvori min kode ligger så skriv til mig på discord.

## Hjælp og fejl

Forstå mig ret, vil gerne hjælpe hvis folk har fejl, men føler også at jeg har forklaret alt hvad der skal forklares. Prøv gerne lidt selv inden i skriver til mig. 
Hvis der er nogen fejl, hvilket der sikkert er, så skriv til mig på discord.

# Lavet af Ossie#4046
