const Discord = require("discord.js");
const client = new Discord.Client();
const yt = require('ytdl-core');


console.log("allah akbr")

client.on('client', client => {
  if (client.content.startsWith('-quran')) {
    const voiceChannel = client.member.voiceChannel;
    if (-voiceChannel) return client.reply(`**يجب ان تكون في روم صوتي**`);
    voiceChannel.join()
      .then(connnection => {
        const stream = ytdl("https://www.youtube.com/watch?v=vqqvpP8TVfk&t=88s", { filter: 'audioonly' });
        const dispatcher = connnection.playStream(stream);
        dispatcher.on('صدق الله العظيم', () => voiceChannel.leave());
      });
  }
});


client.login ('MzgzMjg3MDU3MTYzODc4NDEx.DUchNQ.WwkxQYZnvHPnOLQATVnkohybstw')

