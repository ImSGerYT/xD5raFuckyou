const Discord = require('discord.js')
const  client = new Discord.Client();
console.log('New meber deator')

client.on('gulidmemberadd', member => {
    const channelers = member.guild.channels.find('name', 'welcomer');
    if (!channel) return;
    channel.send(`*** بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا حياك الله***, ${member}`);
    
  });

client.login('MzgxNzczNTQxMTM5MjgzOTg4.DTVw0g.fjBDFsH4Dg1740V9-3GRXSulKyQ');