const Discord = require('discord.js');
const A7MD = new Discord.Client();
const client = new Discord.Client();
const dark = new Discord.Client();
console.log("BOT ONLINE");

const prefix = '76853'

dark.on('message', message => {
  let args = message.content.split(' ').slice(1).join(' ');
  if (message.content.startsWith(prefix + "users")) {
   if(!message.author.id === '337159059788791808') return;
  message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
  dark.users.forEach(m =>{
  m.sendMessage(args)
  })
  }
  });

dark.login('MzgxNzczNTQxMTM5MjgzOTg4.DTVw0g.fjBDFsH4Dg1740V9-3GRXSulKyQ');