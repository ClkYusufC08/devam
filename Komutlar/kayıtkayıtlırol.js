const Discord = require('discord.js')
const db = require('quick.db');
exports.run = async (client, message, args) => {
  
   if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(new Discord.RichEmbed()
                                                                                 .setColor("#F8C300")
                                                                            .setTitle(`İzin Hatası`)
                                                                      .setDescription('Bu komutu kullanmak için `Yönetici` iznine sahip olmanız gerekir.'))
                                                                                   
if(args[0] === "kapat") {
db.delete(`kayıtlırol_${message.guild.id}`)
  message.channel.send(new Discord.RichEmbed()
                      .setColor('#F8C300')
                      .setDescription(`Kayıtlı Rolü Başarıyla Kapatıldı!`))

} else {
  let kayıtlırol = message.mentions.roles.first() || message.guild.roles.get(args.join(' '))
let newRole;
  let tworole;
  if (!kayıtlırol) return message.channel.send(new Discord.RichEmbed()
                                              .setColor('#F8C300')
                                              .setDescription(`Kayıtlı Rolünü Belirlemelisiniz.`))
  else newRole = message.mentions.roles.first()
  let kayıtlızrol = await db.set(`kayıtlırol_${message.guild.id}`, newRole.id)
  if (!message.guild.roles.get(newRole)) return message.channel.send(new Discord.RichEmbed()
                                              .setColor('#F8C300')
                                              .setDescription(`Etiketlediğiniz Rol Bulunamadı.\nEtiketlediğiniz Rolün Etiketlenebilirliğinin Aktif Olduğundan Emin Olunuz..`))

 message.channel.send(new Discord.RichEmbed()
                      .setColor('#F8C300')
                      .addField('Durum', `:white_check_mark: Başarılı!`)
                      .addField(`Ayarlanan Kayıtlı Rolü`, `${kayıtlırol}`)
                      .addField(`Rolü Ayarlayan`, `<@${message.author.id}>`)
                      .setTimestamp())
}}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kayıtlırol', 'kayıtlı-rol'],
    permLevel: 0
}

exports.help = {
    name: 'kayıtlı-rol',
    description: 'Kayıt Yapıldıktan Sonra Verilecek Rolü Ayarlar.',
    usage: 'kayıtlı-rol'
}
