const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('793431254162472990') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('#F8C300')
        .setTitle(`${client.user.username} - Yardım Menüsü`)
        .setThumbnail(client.user.avatarURL)
        .setDescription(`  \n • | **${ayarlar.prefix}moderasyon** : Yetkililerin Kullanabileceği Komutları Listelersiniz.\n • | **${ayarlar.prefix}sistem** : Kullanabileceğiniz Gelişmiş Sistem Komutlarını Listelersiniz.\n • | **${ayarlar.prefix}bot** : Bot Hakkında Ve Diğer Kategori Komutlarını Görürsünüz.\n • | **${ayarlar.prefix}premium** : Premium Komutlarını Listelersiniz.\n • | **${ayarlar.prefix}oyunlar** : \`( YENİ )\`Discord Üzerinden Oynanabilen Basit Oyunları Listelersiniz.\n • | **${ayarlar.prefix}kayıtsistemi** : \`( YENİ )\`Ayarlanabilir Gelişmiş Kayıt Sisteminin Komutlarını Listelersiniz.`)  
        .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=793431254162472990&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/a3SdZtxBtj) **|** [Web Sitemiz](https://kartalbot.ml)`)
        .setFooter(`Kartal Bot | Bot Sürümü : v1.0 | Varsayılan Prefix : !`, client.user.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','y','help','h'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};