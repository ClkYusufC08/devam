const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('793431254162472990') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('#F8C300')
        .setTitle(`${client.user.username} - Sistem Komutları Listesi`)
        .setDescription(` • | **${ayarlar.prefix}korumasistemi** : Bütün Koruma Komutlarını Listelersiniz.\n• | **${ayarlar.prefix}otorolsistemi** : Otorol Komutlarını Listelersiniz.\n • | **${ayarlar.prefix}sayaçsistemi** : Sayaç Komutlarını Listelersiniz.\n • | **${ayarlar.prefix}ototagsistemi** : Otomatik Tag Komutlarını Listelersiniz.\n • | **${ayarlar.prefix}sa-as** : Otomatik Selamlaşmayı Açıp Kapatırsınız.\n • | **${ayarlar.prefix}hg-bb** : Özelden Gönderilen Otomatik Karşılama ve Uğurlama Komutunu Açıp Kapatırsınız.`)  
.addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=793431254162472990&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/a3SdZtxBtj) **|** [Web Sitemiz](https://kartalbot.ml)`)        .setFooter(`Kartal Bot | Bot Sürümü : V1 | Varsayılan Prefix : !`, client.user.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sistem'],
  permLevel: 0,
};

exports.help = {
  name: 'sistem',
  description: '',
  usage: ''
};