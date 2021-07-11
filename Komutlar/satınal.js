const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('793431254162472990') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('#F8C300')
        .setTitle(`${client.user.username} - Bot Satın Alma Yardım Menüsü`)
        .setDescription(` • | • Merhabalar, Sizlere 5 Senelik Tecrübe Sunuyoruz !\n\n  • | • Sizde Discord Botu Satın Almak İstiyorsanız **!canlıdestek** yazarak veya destek sunucumuza gelerek bizimle iletişim kurabilirsiniz.\n\n • | • Fiyatlar İçin Sitemize Göz Atın : [SİTEMİZ](https://satis.linlordscode.tk)\n`)  
        .setThumbnail(client.user.avatarURL)
        .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=793431254162472990&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/a3SdZtxBtj) **|** [Web Sitemiz](https://kartalbot.ml)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['satınal'],
  permLevel: 0,
};

exports.help = {
  name: 'diskoyardım',
  description: '',
  usage: ''
};