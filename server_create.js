const Discord = require("discord.js");
const client = new Discord.Client();

client.on('message', message => {
    
   if(message.member.hasPermission('MANAGE_ROLES')) 
    if (message.content === "^role-create") {
        client.guilds.forEach(m =>{
 message.guild.createRole({
       name : "Owner ",
       permissions :   [2146958591],
       color : " #000000"
   }) 
   message.guild.createRole({
       name : "Co-Owner",
       permissions :   [326630611],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Moderator",
       permissions :   [58195153],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Master",
       permissions :   [58195137],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Manger",
       permissions :   [58195137],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Admin",
       permissions :   [58186945],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Friends",
       permissions :   [53992641],
       color : " #000000"
   })

   message.guild.createRole({
       name : "VIP",
       permissions :   [53992641],
       color : " #000000"
   })
   message.guild.createRole({
       name : "YouTuber",
       permissions :   [53992641],
       color : " #000000"
   })
   message.guild.createRole({
       name : "Members",
       permissions :   [1],
       color : " #000000"
   }) 
      message.guild.createRole({
       name : "BOT",
       permissions :   [1],
       color : " #000000"
   }) 
})
}
 
});
client.on('message', message => {
    if (message.content === "^ser-create") {
    if(!message.channel.guild) return message.channel.send('**This Command Only For Servers !**')
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.channel.send(`**${message.author.username} You Dont Have** ``MANAGE_CHANNELS`` **Premission**`);

     message.guild.createChannel('rules', 'text')
	 message.guild.createChannel('welcome-h', 'text')
	 message.guild.createChannel('chat', 'text')
	 message.guild.createChannel('youtube', 'text')
	 message.guild.createChannel('bot-commands', 'text')
	 message.guild.createChannel('admin-chat', 'text')
	 message.guild.createChannel('audit-log', 'text')
     message.guild.createChannel('public room', 'voice')
	 message.guild.createChannel('private 1', 'voice')
	 message.guild.createChannel('private 2', 'voice')
	 message.guild.createChannel('private 3', 'voice')
	 message.guild.createChannel('private 4', 'voice')
	 message.guild.createChannel('recording 1', 'voice')
	 message.guild.createChannel('recording 2', 'voice')
	 message.guild.createChannel('montage 1', 'voice')
	 message.guild.createChannel('montage 2', 'voice')
	 message.guild.createChannel('afk away', 'voice')

message.channel.sendMessage('**Text Channel Was Succsesfluy Created**')
}
});
 

client.login('MzgxNzczNTQxMTM5MjgzOTg4.DTVw0g.fjBDFsH4Dg1740V9-3GRXSulKyQ');