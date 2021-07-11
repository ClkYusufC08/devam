const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('793431254162472990') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('#F8C300')
        .setTitle(`${client.user.username} - Yapılan Yenilikler`)
        .setDescription(` **• \`!yardım\` Menüsü Düzenlendi,Tüm Komutların Açıklaması Eklendi.\n• Ayarlanabilir Kayıt Sistemi Eklendi : \`!kayıtsistemi\`\n• Bazı Oyunlar Eklendi : \`!oyunlar\` \n• Bazı Komut Bugları Düzeltildi.\n• Botun Gecikme Süresi Azaltıldı.\n\n• Kartal Bot V1 Sürümüyle Karşınızda !**`)  
        .setThumbnail(client.user.avatarURL)
.addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=793431254162472990&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/a3SdZtxBtj) **|** [Web Sitemiz](https://kartalbot.ml)`)        .setFooter(`Kartal Bot | Bot Sürümü : V1 | Varsayılan Prefix : !`, client.user.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yenilikler','yeni'],
  permLevel: 4,
};

exports.help = {
  name: 'yenilik',
  description: '',
  usage: ''
};