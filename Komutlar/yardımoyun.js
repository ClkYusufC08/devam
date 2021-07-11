const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('793431254162472990') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('#F8C300')
        .setTitle(`${client.user.username} - Oyun Listesi`)
        .setDescription(`• | **${ayarlar.prefix}kelime-tahmini** : Bot İle Kelime Tahmin Yarışması Oynarsınız  \`( #BETA )\`.\n • | **${ayarlar.prefix}adamasmaca** : Bot İle Adam Asmaca Oynarsınız. \`( #BETA )\`\n • | **${ayarlar.prefix}sayı-tahmini** : Bot İle Sayı Tahmini Oynarsınız. \`( #BETA )\``)  
        .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=793431254162472990&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/a3SdZtxBtj) **|** [Web Sitemiz](https://kartalbot.ml)`)        .setFooter(`Kartal Bot | Bot Sürümü : v0.1 | Varsayılan Prefix : !`, client.user.avatarURL)
    return message.channel.sendEmbed(embed);
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oyunlar'],
  permLevel: 0,
};

exports.help = {
  name: 'oyun',
  description: '',
  usage: ''
};