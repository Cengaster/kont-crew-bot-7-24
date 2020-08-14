const Discord = require('discord.js');


exports.run = function(client, message) {

  const embed = new Discord.MessageEmbed()
      .setDescription("**EZ BIRÇİME**")
      .setImage("https://www.google.com.tr/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FEmP37p1HSE0%2Fhqdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DGOEjuNGBLjM&tbnid=xjsaZXUlg6Mr2M&vet=12ahUKEwiZ68HUhZvrAhVWO-wKHVWWC-AQMygOegUIARDLAQ..i&docid=EM2mrDEHz4dJ4M&w=480&h=360&q=ez%20b%C4%B1r%C3%A7ime&ved=2ahUKEwiZ68HUhZvrAhVWO-wKHVWWC-AQMygOegUIARDLAQ")
      .setThumbnail("https://www.google.com.tr/imgres?imgurl=https%3A%2F%2Fi.ytimg.com%2Fvi%2FEmP37p1HSE0%2Fhqdefault.jpg&imgrefurl=https%3A%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DGOEjuNGBLjM&tbnid=xjsaZXUlg6Mr2M&vet=12ahUKEwiZ68HUhZvrAhVWO-wKHVWWC-AQMygOegUIARDLAQ..i&docid=EM2mrDEHz4dJ4M&w=480&h=360&q=ez%20b%C4%B1r%C3%A7ime&ved=2ahUKEwiZ68HUhZvrAhVWO-wKHVWWC-AQMygOegUIARDLAQ")
      .setColor(0x00AE86)
      .addField("Lakabı", "Acıktım.", true)
      .addField("Yetenekleri", `
      *Beleş harçlık, yemek ve kaçak çay şifresi söyler.
 *Evde denemeyin.
 `, true)
 .addField("Karşılık", `Ma bırçi oğlu bırçi ne bekliisen içeri geel.`, true)
 .addField("selam", "haha naber")


 message.channel.send(embed)
};

exports.conf = {
enabled: true,
guildOnly: false,
aliases: [],
permLevel: 0
};

exports.help = {
name: 'ezbırçime',
description: 'Ez Bırçime dayı hakkında bilgi verir.',
usage: 'ezbırçime'
};
