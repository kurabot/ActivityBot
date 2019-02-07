const Discord = require('discord.js');
const bot = new Discord.Client();
const prefix = ("?");

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('rien')
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur de Alexpgm' + member.displayName)
        console.log(`${member.displayName} à rejoind le serveur.`)
    })
});

const ban = require('./kick et ban/ban');
require('./embed/RichEmbed');

bot.on('message', function (message){
    if (ban.match(message)){
        return ban.action(message)
    }
});

bot.login(process.env.TOKEN); //a garder en version heroku
