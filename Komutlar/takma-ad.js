const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || "!"
  if (!message.member.hasPermission("BAN_MEMBERS")) {
    const embed = new Discord.RichEmbed()
      .setDescription(`Ne yazık ki bu komutu kullanmaya yetkin yok.`)
      .setColor("#F8C300")
.setFooter(bot.user.username, bot.user.avatarURL);
    message.channel.send(embed);
    return;
  }

  let rMember =
    message.guild.member(message.mentions.users.first()) ||
    message.guild.members.get(args[0]);

  if (!rMember) {
    return message.channel.send(
      new Discord.RichEmbed()
        .setDescription(
          `Lütfen bir kullanıcı giriniz!\nÖrnek: ${prefix}isim <@Kullanıcı> <Yeniİsim>`
        )
        .setColor("#F8C300")
      .setFooter(bot.user.username, bot.user.avatarURL)
    );
  }

  let isim = args.slice(1).join(' ')
  rMember.setNickname(`${isim}`);
  
  const embed = new Discord.RichEmbed()
  .setColor("#F8C300")
  .setDescription(`${rMember} adlı şahsın adı değiştirildi!`)
  .setFooter(bot.user.username, bot.user.avatarURL);
  message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["takma-ad","isim"],
  permLevel: 1,
  kategori: 'moderasyon'
};

exports.help = {
  name: "ad",
  description: "Etiketlenen kişinin adını değiştirirsiniz.",
  usage: "ad"
};
