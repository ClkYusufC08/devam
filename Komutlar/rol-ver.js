const Discord = require("discord.js");
const db = require("quick.db");
module.exports.run = async (bot, message, args) => {
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "!";
  if (!message.member.hasPermission("KICK_MEMBERS")) {
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
  if (!rMember)
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setDescription(
          `Lütfen bir kullanıcı giriniz!\nÖrnek: ${prefix}rol-ver <@Kullanıcı> <Rol>`
        )
        .setFooter(bot.user.username, bot.user.avatarURL)
        .setColor("#F8C300")
    );
  let role =
    message.mentions.roles.first() ||
    message.guild.roles.find(rol => rol.name === args[1]);

  if (!role)
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setDescription(
          `Lütfen bir rol belirtiniz!\nÖrnek: ${prefix}rol-ver <@Kullanıcı> <Rol>`
        )
        .setFooter(bot.user.username, bot.user.avatarURL)
        .setColor("#F8C300")
    );

  if (rMember.roles.has(role.id))
    return message.channel.sendEmbed(
      new Discord.RichEmbed()
        .setDescription("Kullanıcı zaten bu role sahip!")
        .setColor("#F8C300")
        .setFooter(bot.user.username, bot.user.avatarURL)
    );
  await rMember.addRole(role.id);
  message.channel.sendEmbed(
    new Discord.RichEmbed()
      .setDescription(
        `${rMember} adlı şahsa \`${role.name}\` adlı rol verildi!`
      )
      .setColor("#F8C300")
      .setFooter(bot.user.username, bot.user.avatarURL)
  );
};

module.exports.conf = {
  aliases: ["rolver"],
  permLevel: 2,
  enabled: true,
  guildOnly: true,
  kategori: "moderasyon"
};

module.exports.help = {
  name: "rol-ver",
  description: "rol-ver",
  usage: "rol-ver"
};
