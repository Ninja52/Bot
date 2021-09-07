const Discord = require("discord.js");
const { Client, Intents } = require('discord.js');
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const config = require("./config.json");
const client = bot;
const { prefix } = require('./config.json'); 
const colors = require("colors")



bot.on('messageCreate', message => {
  if (message.author.bot) return;
  if (message.channel.type == 'dm') return;
  if (!message.content.toLowerCase().startsWith(prefix.toLowerCase())) return;
  if (message.content.includes(`<@!${bot.user.id}>`) || message.content.includes(`<@${bot.user.id}>`)) return;

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

bot.on('ready', () => {
  console.log("\n")
  console.log(`            ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓`.bold.brightGreen)
  console.log(`            ┃ `.bold.brightGreen + `Bot Online!`.bold.brightGreen)
  console.log(`            ┃ `.bold.brightGreen + ` /--/ ${client.user.tag} /--/ `.bold.brightGreen)
  console.log(`            ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛`.bold.brightGreen)
  console.log("\n")
});

/*bot.on("guildMemberAdd", async (member) => { 

    let embed = new Discord.MessageEmbed()
    .setColor("#ff0000")
    .setAuthor(member.user.tag, member.user.displayAvatarURL())
    .addField(`\`Seja bem vindo ao IDP!\``, `**__O IDP é a comunidade ideal pra você que procura um lugar pra se divertir, fazer novos amigos e ter acesso a conteúdos hot!__**`)
    .addField(`\`Regras:\``, `**__Para manter um ambiente saudável é necessário que existam regras. Leia nossas regras!__**
            <#839178444067307559>`)
    .addField(`\`Registre-se:\``, `**__Seja um membro registrado em nosso servidor para não perder chances de ganhar sorteios!__**
            <#839178446528577594>`)
    .addField(`\`Seja Staff:\``, `**__Caso queira fazer parte da nossa equipe de staffs leia o nosso recrutamento!__**
            <#857069676764069899>`)
    .addField(`\`Eventos:\``, `**__Promovemos eventos e brincadeiras no servidor, fique por dentro no canal:__**
            <#839178447501787165>`)
    .addField(`\`Chat geral:\``, `**__Quer conversar, fazer novas amizades e conhecer novas pessoas? Converse em nosso chat geral:__**
            <#874353515546435595>`)
    .setImage("https://media.discordapp.net/attachments/855515114563043338/859229077382889472/sexy-girls-red-hair-lipstick-wallpaper.jpg?width=684&height=427")
    .setFooter("IDP - Inferno da Putaria")

    try {
        member = await member.send({embeds: [embed]})
      } catch { 
        return;
      }})*/

client.on('ready', () => {

    setInterval(async () => {
    
        let guild = client.guilds.cache.get('839178443849203712')  /// id da guild
        const voiceChannels = guild.channels.cache.filter(c => c.type === 'voice');
        let count3 = 0;
        const voiceChannels3 = guild.channels.cache.filter(c => c.type === 'voice');
        for (const [id, voiceChannel] of voiceChannels3) count3 += voiceChannel.members.size;
        client.channels.cache.get('874404506698383410').setName(`🔊  ${count3} Total em Call`)   //// id da call total em call


console.log(count3)

    }, 300e3);
});
      

  client.on("ready", () => {
    let activities = [                          
    `🔥 Inferno da Putaria`,
    `🚀 CRIADO POR NINJA!`,
    `🔝 ATUALMENTE TEMOS ${bot.users.cache.size} MEMBROS NO SERVIDOR.`,
    ],
    i = 0;
    setInterval(() => client.user.setActivity(`${activities[i++ % activities.length]}`, {
        type: "PLAYING"
    }), 10000); //PLAYING, LISTENING, WATCHING, STREAMING
    });



    client.on('messageCreate', (message) => {

        {
                if (
                  (!message.author.bot && message.content.includes("<@852611398144098356>") || message.content.includes("<@!852611398144098356>")) || // id ninja
                  (!message.author.bot && message.content.includes("ninja")) ||
                  (!message.author.bot && message.content.includes("Ninja")) ||
                  (!message.author.bot && message.content.includes("NINJA"))
                ) {
                  message.react("845843656836644864") && message.react("839585865793798165");
                }
              }

              {
                if (
                  (!message.author.bot && message.content.includes("<@535808104420605974>") || message.content.includes("<@!535808104420605974>")) || // id jessica, safadinha
                  (!message.author.bot && message.content.includes("Safadinha")) ||
                  (!message.author.bot && message.content.includes("safadinha")) ||
                  (!message.author.bot && message.content.includes("ayshe")) ||
                  (!message.author.bot && message.content.includes("Ayshe")) ||
                  (!message.author.bot && message.content.includes("malicie")) ||
                  (!message.author.bot && message.content.includes("Malicie")) ||
                  (!message.author.bot && message.content.includes("Jessica")) ||
                  (!message.author.bot && message.content.includes("jessica")) ||
                  (!message.author.bot && message.content.includes("jesga")) ||
                  (!message.author.bot && message.content.includes("Jesga"))
                ) {
                  message.react("845843655902232606");
                }
              }

              {
                if (
                  (!message.author.bot && message.content.includes("<@486931943053590530>") || message.content.includes("<@!486931943053590530>")) || // id Bryan 
                  (!message.author.bot && message.content.includes("Bryan")) ||
                  (!message.author.bot && message.content.includes("bryan")) 
                ) {
                  message.react("845832854432514088");
                }
              }

              {
                
                if (
                  (!message.author.bot && message.content.includes("<@626468586445340672>") || message.content.includes("<@!626468586445340672>")) || // id Gege
                  (!message.author.bot && message.content.includes("Gege")) ||
                  (!message.author.bot && message.content.includes("gege")) 
                ) {
                  
                  message.react("848328853699952690");
                }
              }

              {
                if (
                  (!message.author.bot && message.content.includes("<@829033097101180948>") || message.content.includes("<@!829033097101180948>")) || // id Duzz
                  (!message.author.bot && message.content.includes("Duzz")) ||
                  (!message.author.bot && message.content.includes("duzz"))
                ) {
                  message.react("873396023777714236");
                }
              }

              {
                if (
                  (!message.author.bot && message.content.includes("<@763941548483149855>") || message.content.includes("<@!763941548483149855>")) || // id Luan, gago
                  (!message.author.bot && message.content.includes("Luan")) ||
                  (!message.author.bot && message.content.includes("luan")) ||
                  (!message.author.bot && message.content.includes("Gago")) ||
                  (!message.author.bot && message.content.includes("gago"))
                ) {
                  message.react("850502154867441664");
                }
              }

              {
                if (
                  (!message.author.bot && message.content.includes("<@852620887726227506>") || message.content.includes("<@!852620887726227506>")) || // id Capetinha
                  (!message.author.bot && message.content.includes("Capetinha")) ||
                  (!message.author.bot && message.content.includes("capetinha")) ||
                  (!message.author.bot && message.content.includes("Cold")) ||
                  (!message.author.bot && message.content.includes("cold"))
                ) {
                  message.react("873696149947703316");
                }
              }

            {
              if (
                (!message.author.bot && message.content.includes("<@852661882804240394>") || message.content.includes("<@!852661882804240394>")) || // id Allan
                (!message.author.bot && message.content.includes("Sunny")) ||
                (!message.author.bot && message.content.includes("sunny"))
              ) {
                message.react("839572069141184552");
              }
            }

            {
                if (
                  (!message.author.bot && message.content.includes("<@256246146622685184>") || message.content.includes("<@!256246146622685184>")) || // id Leo
                  (!message.author.bot && message.content.includes("Léo")) ||
                  (!message.author.bot && message.content.includes("Leo")) ||
                  (!message.author.bot && message.content.includes("léo")) ||
                  (!message.author.bot && message.content.includes("leo"))
                ) {
                  message.react("875423557058981949");
                }
              }

              {
                if (
                  (!message.author.bot && message.content.includes("<@398313196735430656>") || message.content.includes("<@!398313196735430656>")) || // id Need
                  (!message.author.bot && message.content.includes("Need")) ||
                  (!message.author.bot && message.content.includes("need"))
                ) {
                  message.react("845833393774395432");
                }
              }

              //MENCIONAR NINJA
            var ninja = [
              `**${message.author} um pobre acabou de me marcar!**`,
              `**To fazendo uma puta gemer, não me cita ${message.author}!**`,
              `**${message.author} não me marca random, vão pensar que eu te conheço!**`,
              `**${message.author} você é rico? Se não for nem me cite fazendo favor!**`
            ]
            if (
              message.channel.id !== '882708209691951184'
              ) return
            if (
              message.content.toLowerCase().includes("<@852611398144098356>") ||
              message.content.toLowerCase().includes("<@!852611398144098356>")
              )
              {
                const ninja1 = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setDescription(`${ninja[Math.floor(Math.random() * ninja.length)]}`)

                message.reply({ embeds: [ninja1] })
              }

              if (
                message.content.toLowerCase().includes("<@626468586445340672>") ||
                message.content.toLowerCase().includes("<@!626468586445340672>")
                )
                {
                const gege = new Discord.MessageEmbed()
                .setColor("#ff0000")
                .setDescription(`**👑 Sua vez vai chegar, espera puta ${message.author} 🔥**`)

               message.reply({ embeds: [ gege ]})
                }
            if (message.content.includes(`<@${client.user.id}>`) || message.content.includes(`<@!${client.user.id}>`)) {//Bot mandar mensagem quando mencionarem ele.
              message.react("859885392539156541");
              let embed = new Discord.MessageEmbed() 
            .setColor(`#ff0000`) 
            .addField(`**Hello World!**`, `> **__Sou um bot criado e desenvolvido pelo <@852611398144098356> (Ninja), minha função é reagir em certas mensagens e dar vantagem para os vips puxarem avatar no chat geral!__**`)
            .setThumbnail("https://images-ext-2.discordapp.net/external/_hqAe2bcKISJw42V7dWVFRn1YX7kvjV_NOJUfEAVZ68/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/848010199892754493/3fdfbd0c31d6cb9d267a7f3e78394af1.png?width=192&height=192")
            .setFooter(`• Desenvolvido por Ninja!`, message.author.displayAvatarURL({format: "png"}));
        
        return message.reply({embeds: [embed]});
    }});
    

bot.login(config.token);






















