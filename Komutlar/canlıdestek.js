const Discord = require('discord.js');

exports.run = async(client, message, args) => {
   
  let isEnabled;
  message.channel.send(`:white_check_mark:  **Canlı Destek Talebiniz işleme alınmıştı,yetkili ekibimiz birazdan sizinle ilgilenecektir.**<a:yukleniyor:809318555061059614>`);
  let chan = message.channel;
  let destekKanal = "794941637712937045";/// buraya canlı destek mesajı atılacak kanal idisi
  const embed = new Discord.RichEmbed()
      .addField('Dikkat', `Canlı Destek Talebi`)
      .setColor("RED")
      .addField(`Bilgiler`, `Sunucu: ${message.guild.name} \n Kanal: ${message.channel.name} \n Destek İsteyen: ${message.author.tag}`)
      .setFooter("KartalBot | Canlı Destek")
  client.channels.get(destekKanal).send(embed);
  const collector = client.channels.get(destekKanal).createCollector(message => message.content.startsWith(''), {
    time: 0
  })
  client.channels.get(destekKanal).send(`:#F8C300_circle: **<@809173044814807100> Destek çağrısına bağlanmak için \`bağlan\`, iptal etmek için \`iptal\` yazınız.:#F8C300_circle:**`)
  collector.on('message', (message) => {
    if (message.content === 'iptal') collector.stop('aborted')
    if (message.content === 'bağlan') collector.stop('success')
  })
  collector.on('end', (collected, reason) => {
    if (reason === 'time') return message.channel.send(`:red_circle:  **Canlı destek talebiniz zaman aşımına uğradı.**`)
    if (reason === 'aborted') {
      message.channel.send(`:red_circle: **Canlı destek talebiniz yetkili tarafından reddedildi.**`)
      client.channels.get(destekKanal).send(`**:red_circle:  Canlı destek talebi reddedildi.**`)
    }
    if (reason === 'success') {
      client.channels.get(destekKanal).send(`**:white_check_mark:  Canlı destek talebi kabul edildi. İptal etmek için \`iptal\` yazınız.**`)
      chan.send(`**:white_check_mark:   ${message.author}, canlı destek talebiniz yetkili tarafından kabul edildi. İptal etmek için \`iptal\` yazınız.**`)
      isEnabled = true
      client.on('message', message => {
        function contact() {
          if (isEnabled === false) return
          if (message.author.id === client.user.id) return
          if (message.content.startsWith('iptal')) {
            message.channel.send(`**:red_circle:  Canlı destek talebini iptal ettiniz.**`)
            if (message.channel.id === chan.id)
              client.channels.get(destekKanal).send(`**:red_circle:  Canlı destek talebi kullanıcı tarafından iptal edildi.**`)
            if (message.channel.id === destekKanal) 
              chan.send(`:red_circle:  Canlı destek talebiniz yetkili tarafından iptal edildi.\n:white_check_mark: Kartal Bot olarak sizlere iyi bir hizmet sağlayabildiysek ne mutlu bize,iyi günler.**`)
            return isEnabled = false
          }
          if (message.channel.id === chan.id) 
            client.channels.get(destekKanal).send(`**Talepte Bulunan Kişi : ${message.author.tag}** : ${message.content}`)
          if (message.channel.id === destekKanal) 
            chan.send(`**Yetkili :** ${message.content}`)
        }
        contact(client)
      })
    }
  })
}

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['canlı', 'canlıdestek'],
  permLevel: 0
};

exports.help = {
  name: 'canlıdestek',
  description: 'Yetkililerle canlı desteğe geçersiniz.',
  usage: 'canlıdestek'
};