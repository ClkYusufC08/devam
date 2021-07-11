const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  
  const embed = new Discord.RichEmbed()
    .setColor("#F8C300")
    .addField(`Destek Sun<:a:807953080300863538>ucumuza Katılın!`, `[Tıkla](https://discord.gg/a3SdZtxBtj)`)
.setFooter(client.user.username, client.user.avatarURL)

  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['destek','sunucu'],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "destek-sunucu",
  description: "destek-sunucu",
  usage: "destek-sunucu"
};
