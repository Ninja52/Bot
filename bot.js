const Discord = require('discord.js')
const bot = new Discord.Client();
const config = require("./config.json");
const client = bot;
const { prefix } = require('./config.json'); 

bot.on('ready', () => {
    console.log('Estou pronto para ser usado!')
  }); 

bot.on('message', message => {
  if (message.author.bot) return;
  if (message.channel.type == 'dm') return;
  if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
  if (message.content.startsWith(`<@!${bot.user.id}>`) || message.content.startsWith(`<@${bot.user.id}>`)) return;

 const args = message.content
     .trim().slice(prefix.length)
     .split(/ +/g);
 const command = args.shift().toLowerCase();

 try {
    const buscas_cmdh = require(`./commands/${command}.js`)
    buscas_cmdh.run(bot, message, args);
} catch (err) {
console.error('Erro:' + err);
}
});


bot.on("ready", () => {
let activities = [
    `🐊 TOCA DOS CRIAS`,
    `🚀 CRIADO POR NINJA!`,
    `🔝 ATUALMENTE TEMOS ${bot.users.cache.size} MEMBROS NO SERVIDOR.`,
    `🆘 ESTÁ COM DÚVIDAS? DIGITE T!AJUDA`,
    `🛠️ BOT EM DESENVOLVIMENTO!!`
],
i = 0;
setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
    type: "PLAYING"
}), 7000); //PLAYING, LISTENING, WATCHING, STREAMING
});


bot.login(config.token);
