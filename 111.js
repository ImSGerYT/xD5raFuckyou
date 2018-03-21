
client.on('message', message => {
    var prefix = "^^";
      if (!message.content.startsWith(prefix)) return;
      var args = message.content.split(' ').slice(1);
      var argresult = args.join(' ');
      if (message.author.id == 409370787489775616) return;
    
    if (message.content.startsWith(prefix + 'playing')) {
      client.user.setGame(argresult);
        message.channel.sendMessage(`**${argresult}** : Status changed`)
    } else
    
    if (message.content.startsWith(prefix + 'Stream')) {
      client.user.setGame(argresult, "https://www.twitch.tv/ChampionBot");
        message.channel.sendMessage(`**${argresult}** :The bot stream has been changed`)
    } else
    
    if (message.content.startsWith(prefix + 'Name')) {
      client.user.setUsername(argresult).then
          message.channel.sendMessage(`**${argresult}** : Name changed`)
      return message.reply("**You**");
    } else
    if (message.content.startsWith(prefix + 'Image')) {
      client.user.setAvatar(argresult);
        message.channel.sendMessage(`**${argresult}** : The bot image has been changed`);
    
    }
    });

client.on('message', msg => {
    if (msg.content === 'ping') {
      msg.reply('Pong!');
    }
  });
  
  client.on('ready',  () => {
    console.log('By : ImSGer ');
    console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
    console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
  });
  
  
  client.on("message", message => {
               
if(!message.channel.guild) return;
   if (message.content === "^^Info") {
     message.react("😜")
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .addField("『SGerO-premium』 『اسم البوت』", true)
        
        .addField("『ImSGer + f4waz』『مصمم البوت』", true)
        
          .addField("『^^help』👻『اذا تبي الاوامر العامة』😳", true)
          
        .addField("『^^helpA』😮『اذا تبي  الاوامر الادارية』🤒", true)
        
        .addField("『🤑』『قريبا سوف نضيف المزيد و المزيد من الاوامر 』『😉』", true)
        
    message.channel.sendMessage({embed});
  
   }
  });
  
  
  
  
  

  

  
  
  
  client.on("message", message => {
   if (message.content === "^^help") {
          message.react("😘")
             message.react("😵")
    const embed = new Discord.RichEmbed() 
        .setColor("#ffff00")
        .setThumbnail(message.author.avatarURL)
        .setDescription(`
  -🚀 سرعه اتصال ممتازه
  -😎 سهل الاستخدام 
  -⚠ صيانه كل يوم
  -💵 مجاني بل كامل 
  -📚 البوت عربي و سيتم اضافه اللغه النكليزية
  
  ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
  
  💎『اوامر عامة』💎
                          
  💎^^server 『معلومات عن السيرفر』                      
  
  💎^^servers 『علشان تشوف البوت بكم سيرفر اون لاين 』  
  
  💎^^bot 『لمعرف البوت بكم سيرفر』
  
  💎^^date 『لمعرفه التاريخ』
  
  💎^^ping 『لمعرفه سرعه البوت』
  
  💎^^members 『معلومات عن الاعضاء』
  
  💎^^embed 『خاصيه غرد لكن بغير طريقه』
  
  💎^^say 『لي يكرر الكلام الذي تقوله』
  
  💎^^animal  『كود لي اضهار صور  للحيوانات』
  
  ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
  
  👑『اوامر ادارية』👑
  
  👑^^rooms 『لمعرفه عدد رومات السيرفر』
  
  👑^^ban 『لتعطي شخص باند』
  
  👑^^kick 『لتعطي شخص كيك』
  
  👑^^clear 『لمسح الشات برقم』
  
  👑^^edit  『لتعديل رساله 』

  👑^^delet  『كـود يحذف الـروم سواء صوتي او كتابي』

  👑^^ser-create  『لعمل سيرفر بسرعة | تحذير لا تفعلوها بسيرفر متاكامل فقد يفعل رومات متكررة』
  ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
  💸『ميز بوت اس جيرو بريمايوم』💸
  
  💸^^playing『لجعل البوت يلعب العبة التي تكتبها』

  💸^^stream『لجعل البوت يسوي بث ك لعبة』

  💸^^Name『لتغير اسم البوت』

  💸^^Image『لتغير صورة البوت』
  
  ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 

  💎『الدعم الفني والمساعدة』💎
  
  ^^invite | القسم الاول لي اضافه البوت 
  
  ^^support| القسم الثاني  الدعم الفني و المساعدة
  
  القسم الثالث مصمم البوت | ImSGer 
  
  ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
  
  
  
  
  `)
  
  
  message.author.sendEmbed(embed)
  
  }
  }); 
  
  
  
  client.on("message", message => {
   if (message.content === "^^helpA") {
          message.react("😮")
                  message.react("🤒")
    const embed = new Discord.RichEmbed() 
        .setColor("#ffff00")
        .setThumbnail(message.author.avatarURL)
        .setDescription(`
        
        
  ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
  👑『اوامر ادارية』👑
  
  👑^^ban 『لتعطي شخص باند』
  
  👑^^kick 『لتعطي شخص كيك』
  
  👑^^clear 『لمسح الشات برقم』
  
  👑^^edit  『لتعديل رساله 』
  
  👑^^delet  『كـود يحذف الـروم سواء صوتي او كتابي』
  
  👑^^bc  『خيارات البرودكاست』 
  
  👑^^rooms 『لمعرفه عدد رومات السيرفر』
  
  👑^^ser-create  『لعمل سيرفر بسرعة | تحذير لا تفعلوها بسيرفر متاكامل فقد يفعل رومات متكررة』

  ● ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ ● 
  
        
  
  💎『الدعم الفني والمساعدة』💎
  
  ^invite | القسم الاول لي اضافه البوت 
  
  ^support| القسم الثاني  الدعم الفني و المساعدة
  
  القسم الثالث مصمم البوت |ImSGer 
  
  
  
  
  
  
  `)
  
  
  message.author.sendEmbed(embed)
  
  }
  }); 
  
  
  
  
  
  

  
  



                          client.on('message', message => {
                            if(!message.channel.guild) return;
                    if (message.content.startsWith('^^ping')) {
                        if(!message.channel.guild) return;
                        var msg = `${Date.now() - message.createdTimestamp}`
                        var api = `${Math.round(client.ping)}`
                        if (message.author.bot) return;
                    let embed = new Discord.RichEmbed()
                    .setAuthor(message.author.username,message.author.avatarURL)
                    .setThumbnail('https://cdn.discordapp.com/avatars/368141321547808768/c42716e13cb850f9ad0930af699472d0.png?size=2048nk')
                    .setColor('RANDOM')
                    .addField('**Time Taken:**',msg + " ms")
                    .addField('**WebSocket:**',api + " ms")
     message.channel.send({embed:embed});
                    }
                });








var prefix = "^^";

client.on('message', message => {
if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;

let command = message.content.split(" ")[0];
command = command.slice(prefix.length);

let args = message.content.split(" ").slice(1);

// ^say
if (command === "say") {
      message.delete()
message.channel.sendMessage(args.join(" ")).catch(console.error);
}



if (command == "embed") {
let say = new Discord.RichEmbed()
.setDescription(args.join("  "))
.setColor(0x23b2d6)
message.channel.sendEmbed(say);
message.delete();
}


});




client.on('message', (message) => {
if (message.content.startsWith('^^kick')) {
    var member= message.mentions.members.first();
    member.kick().then((member) => {
        message.channel.send(member.displayName + ' تم طرد هذا الشخص من السيرفر');
    }).catch(() => {
        message.channel.send(":x:");
    });
}
}); 


client.on('message', (message) => {
if (message.content.startsWith('^^ban ')) {
  if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('هذا الخاصية للدارة فقط');
    var member= message.mentions.members.first();
    member.ban().then((member) => {
     message.channel.send(member.displayName + 'تم طرد هذا الشخص من السيرفر');
    }).catch(() => {
        message.channel.send('Error :_:');
    });
}
});

client.on("message", (message) => {
if (message.content.startsWith('^^delet')) {
    if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

    let args = message.content.split(' ').slice(1);
    let channel = message.client.channels.find('name', args.join(' '));
    if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
    channel.delete()
}
});


client.on('message', message => {
 if (message.content === "^^servers") {
 let embed = new Discord.RichEmbed()
.setColor("RANDOM")
.addField("**| السيرفرات |**" , client.guilds.size)
message.channel.sendEmbed(embed);
}
});

var prefix = "^^";
var cats = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg","http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg","http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg","https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg","https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg","https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg","https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg","http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg","https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg","https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg","http://imagem.band.com.br/f_230168.jpg"]
client.on('message', message => {
    var args = message.content.split(" ").slice(1);
if(message.content.startsWith(prefix + 'animal')) {
     var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
}
});

client.on('message', message => {
var prefix = "^^";

if (message.author.id === client.user.id) return;
if (message.guild) {
let embed = new Discord.RichEmbed()
let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
if (!args[1]) {
message.channel.send("**bc <message>**");
return;
}
    message.guild.members.forEach(m => {
if(!message.member.hasPermission('ADMINISTRATOR')) return;
        var bc = new Discord.RichEmbed()
        .addField('» السيرفر :', `${message.guild.name}`)
        .addField('» المرسل : ', `${message.author.username}#${message.author.discriminator}`)
        .addField(' » الرسالة : ', args)
        .setColor('#ff0000')
        // m.send(`[${m}]`);
        m.send(`${m}`,{embed: bc});
    });
}
} else {
    return;
}
});

client.on('message', message => {
if (message.content === "^^server") {
    if (!message.channel.guild) return
    var verificationLevel = message.guild.verificationLevel;
    const verificationLevels = ['None','Low','Meduim','High','Extreme'];
    var Y1 = message.guild.createdAt.getFullYear() - 2000
    var M2 = message.guild.createdAt.getMonth()
    var D3 = message.guild.createdAt.getDate()
    const xNiTRoZ = new Discord.RichEmbed()
     .setAuthor(message.author.username , message.author.avatarURL)
     .setColor('RANDOM')
     .setTimestamp()
     .setTitle(message.guild.name,message.guild.iconURL)
     .addField(':id: اي دي السيرفر',`${message.guild.id}`,true)
     .addField(':date: أنشئت في',D3 + '.' + M2 + '.' + Y1,true)             
     .addField(':crown: اونر السيرفر',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)             
     .addField(':busts_in_silhouette: الاعضاء ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
     .addField(':speech_balloon: قنوات' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
     .addField(':earth_asia: الدوله',message.guild.region)
     .addField(':ribbon: ايموجي السيرفر',`${message.guild.emojis.size}`,true)
     .addField(':construction: مستوى التحقق',`${verificationLevels[message.guild.verificationLevel]}`,true)
     .addField(':closed_lock_with_key: الرتب  '+message.guild.roles.size+' ','Type `.roles` To See The Server Roles!')
     message.channel.send({embed:xNiTRoZ});
 }
});


client.on('message', message => {
if (message.content === "^^rooms") {
                  if (!message.guild) return;

    var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
    .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
    
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
    message.channel.sendEmbed(embed);
}
});

var prefix = "^^";
const HeRo = new Discord.Client();
client.on('message', message => {
  if (message.content === prefix + "date") {
      if (!message.channel.guild) return message.reply('** This command only for servers **');  
      var currentTime = new Date(),
          Year = currentTime.getFullYear(),
          Month = currentTime.getMonth() + 1,
          Day = currentTime.getDate();

          var Date15= new Discord.RichEmbed()
          .setTitle("**『  Date - التاريخ 』 **")
          .setColor('RANDOM')
          .setTimestamp()
          .setDescription( "『"+ Day + "-" + Month + "-" + Year + "』")
          .setFooter(`*help to see all bot commands `, 'https://images-ext-1.discordapp.net/external/x-p4BwGofa_z_p9hpV-4hJPcqWh-aWGQzsmI189cDiY/%3Fwidth%3D344%26height%3D344/https/media.discordapp.net/attachments/372444859329544203/372701184055836682/ass.jpg?width=231&height=231')
           message.channel.sendEmbed(Date15);
  }
});




client.on('message', message => {
          if (!message.channel.guild) return;
  if(message.content =='^^members')
  var IzRo = new Discord.RichEmbed()
  .setThumbnail(message.author.avatarURL)
  .setFooter(message.author.username, message.author.avatarURL) 
  .setTitle(':tulip:| Members info')
  .addBlankField(true)
  .addField(':green_book:| الاونلاين ',
  `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
  .addField(':closed_book:| دي ان دي',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
  .addField(':orange_book:| خامل',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
  .addField(':notebook:| الاوف لاين ',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
  .addField('عدد اعضاء السيرفر',`${message.guild.memberCount}`)
  message.channel.send(IzRo);
});



var prefix = "^^"

client.on('message', message => {
if (message.author.bot) return;
if (!message.content.startsWith(prefix)) return;

if (message.content.startsWith(prefix + 'edit')) {
    message.channel.sendMessage('Edit me').then(msg=>{msg.edit('Done edit')});
}
});

client.on('message', message => {
 if (message.content === "^^bot") {
        if(!message.channel.guild) return message.reply('** This command only for servers **');
 let embed = new Discord.RichEmbed()
.setColor("RANDOM")
.addField("**عدد السيرفرات الي فيها البوت:**" , client.guilds.size)
.addField("**المستخدمين:**", client.users.size)
.addField("**قنوات:**", client.channels.size)
.setTimestamp()
message.channel.sendEmbed(embed);
}
});



client.on('message', message => {
if (message.content === "^^roles") {
    var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .addField('الرتب:',`**[${roles}]**`)
    message.channel.sendEmbed(embed);
}
});










client.on("message", message => {
var prefix = "^^";
        var args = message.content.substring(prefix.length).split(" ");
        if (message.content.startsWith(prefix + "clear")) {
if (!args[1]) {
                            let x5bz1 = new Discord.RichEmbed()
                            .setDescription("^clear <number>")
                            .setColor("#0000FF")
                            message.channel.sendEmbed(x5bz1);
                        } else {
                        let messagecount = parseInt(args[1]);
                        message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                      message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                        message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                        let x5bz2 = new Discord.RichEmbed()
                                                        .setColor("#008000")
                            .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                    message.delete("..");
                            message.channel.sendEmbed(x5bz2);
                        }
                      }
});




client.on('message', message => {
if (true) {
if (message.content === '^^support') {
  message.author.send(' | https://discord.gg/CrWur79 | لـ أي استفسار').catch(e => console.log(e.stack));

}
} 
});



client.on('message', message => {
 if (message.content === "^^support") {
 let embed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setColor("#9B59B6")
.addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص")
 
 
 
message.channel.sendEmbed(embed);
}
});


client.on('message', message => {
if (true) {
if (message.content === '^^invite') {
  message.author.send(' رابط البوت | https://discordapp.com/oauth2/authorize?client_id=381773541139283988&scope=bot&permissions=2146958591 ')
}
} 
});



client.on('message', message => {
 if (message.content === "^^invite") {
 let embed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setColor("#9B59B6")
.addField(" Done | تــــم" , " |  تــــم ارســالك في الخــاص")
 
 
 
message.channel.sendEmbed(embed);
}
});

client.on('message', message => {
        if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('^^bc-usersss')){
if(!message.author.id === '') return;
message.channel.sendMessage('جار ارسال الرسالة |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


client.on('message', message=>{
if (message.content ==='^^add-colors'){
    if (message.channel.guild){
        if (message.member.hasPermission('MANAGE_ROLES')){
            setInterval(function(){})
              let count = 0;
              let ecount = 0;
    for(let x = 0; x < 250; x++){
        message.guild.createRole({name:x,
        color: 'RANDOM'})
  }
        }else{
            message.channel.sendMessage(':warning: You do not have permission to write this command')
        }
    }else{
        message.channel.sendMessage(':warning:  This command only in servers')
    }
}
if (message.content === '^^de-colors'){
            if (message.channel.guild){
        if (message.member.hasPermission('MANAGE_ROLES')){
            setInterval(function(){})
              let count = 0;
              let ecount = 0;
    for(let x = 0; x < 250; x++){
        message.guild.roles.find('name', x)
  }
        }else{
            message.channel.sendMessage(':warning: You do not have permission to write this command')
        }
    }else{
        message.channel.sendMessage(':warning:  This command only in servers')
    }
}

})




client.on('message', message => {
if (message.content.startsWith("ترحيب 1")) {
                             var mentionned = message.mentions.users.first();
         var mentionavatar;
           if(mentionned){
               var mentionavatar = mentionned;
           } else {
               var mentionavatar = message.author;
               
           }
           let bot;
           if(message.author.bot) {
               bot = 'Bot'
           } else {
               bot = 'User'
           } 
var EsTeKnAN = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(`${mentionavatar.avatarURL}`)
.addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
.setDescription('***بكل حب واحترام وشوق نستقبلك ونتمنى لك قضآء أجمل اللحظات ولآوقات معنا***')
.setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
message.channel.sendEmbed(EsTeKnAN);
}
});


client.on('message', message => {
if (message.content.startsWith("ترحيب 2")) {
                             var mentionned = message.mentions.users.first();
         var mentionavatar;
           if(mentionned){
               var mentionavatar = mentionned;
           } else {
               var mentionavatar = message.author;
               
           }
           let bot;
           if(message.author.bot) {
               bot = 'Bot'
           } else {
               bot = 'User'
           } 
var EsTeKnAN = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(`${mentionavatar.avatarURL}`)
.addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
.setDescription('***هلا باللي ملك قلبي هلا باللي فداه الروح هلا باللي شغل فكري هلا باللي هواه البوح.***')
.setImage('https://www.askideas.com/media/13/Welcome-With-Rose-Flowers-Sign.jpg')
message.channel.sendEmbed(EsTeKnAN);
}
});


client.on('message', message => {
if (message.content.startsWith("ترحيب 3")) {
                             var mentionned = message.mentions.users.first();
         var mentionavatar;
           if(mentionned){
               var mentionavatar = mentionned;
           } else {
               var mentionavatar = message.author;
               
           }
           let bot;
           if(message.author.bot) {
               bot = 'Bot'
           } else {
               bot = 'User'
           } 
var EsTeKnAN = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(`${mentionavatar.avatarURL}`)
.addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
.setDescription('***مرحباً بك عدد ما خطته الأقلام من حروف وبعدد ما أزهر بالأرض زهور مرحباً ممزوجة بعطر الورد ورائحة البخور***')
.setImage('https://www.askideas.com/media/13/Welcome-Signboard-Clipart.jpg')
message.channel.sendEmbed(EsTeKnAN);
}
});


client.on('message', message => {
if (message.content.startsWith("ترحيب 4")) {
                             var mentionned = message.mentions.users.first();
         var mentionavatar;
           if(mentionned){
               var mentionavatar = mentionned;
           } else {
               var mentionavatar = message.author;
               
           }
           let bot;
           if(message.author.bot) {
               bot = 'Bot'
           } else {
               bot = 'User'
           } 
var EsTeKnAN = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(`${mentionavatar.avatarURL}`)
.addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
.setDescription('***مرحبا باللي يجينا هلت الفرحة علينا نشدت الأشواق فينا مرحباً بكم مرحباً.***')
.setImage('https://www.askideas.com/media/13/Welcome-Sign.jpg')
message.channel.sendEmbed(EsTeKnAN);
}
});


client.on('message', message => {
if (message.content.startsWith("ترحيب 5")) {
                             var mentionned = message.mentions.users.first();
         var mentionavatar;
           if(mentionned){
               var mentionavatar = mentionned;
           } else {
               var mentionavatar = message.author;
               
           }
           let bot;
           if(message.author.bot) {
               bot = 'Bot'
           } else {
               bot = 'User'
           } 
var EsTeKnAN = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(`${mentionavatar.avatarURL}`)
.addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
.setDescription('***لو علمت الدار بمن زارها فرحت وأستبشرت ثم باست موضع القدمين وأنشدت بلسان الحال قائلة أهلاً وسهلاً بأهل الجود والكرم.***')
.setImage('https://www.askideas.com/media/13/Welcome-Sign-With-Flowers.jpg')
message.channel.sendEmbed(EsTeKnAN);
}
});


client.on('message', message => {
if (message.content.startsWith("ترحيب 6")) {
                             var mentionned = message.mentions.users.first();
         var mentionavatar;
           if(mentionned){
               var mentionavatar = mentionned;
           } else {
               var mentionavatar = message.author;
               
           }
           let bot;
           if(message.author.bot) {
               bot = 'Bot'
           } else {
               bot = 'User'
           } 
var EsTeKnAN = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(`${mentionavatar.avatarURL}`)
.addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
.setDescription('***مرحبا بك كثر النجوم الساطعة وكثر الورود الفائحة التي تفوح بأزكى العطور وكثر ما تكتب الأقلام من الحروف والعبارات. ***')
.setImage('https://www.askideas.com/media/13/Welcome-Sign-For-Front-Door.jpg')
message.channel.sendEmbed(EsTeKnAN);
}
});


client.on('message', message => {
if (message.content.startsWith("ترحيب 7")) {
                             var mentionned = message.mentions.users.first();
         var mentionavatar;
           if(mentionned){
               var mentionavatar = mentionned;
           } else {
               var mentionavatar = message.author;
               
           }
           let bot;
           if(message.author.bot) {
               bot = 'Bot'
           } else {
               bot = 'User'
           } 
var EsTeKnAN = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(`${mentionavatar.avatarURL}`)
.addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
.setDescription('***حي الله هذه الوجوه رؤيتها تزيد الأفراح، نسماتها تداوي الجروح، وعبيرها فواح، تنثره الرياح، على القمم في الليل في الصباح***')
.setImage('https://www.askideas.com/media/13/Small-Welcome-Sign-On-Door.jpg')
message.channel.sendEmbed(EsTeKnAN);
}
});


client.on('message', message => {
if (message.content.startsWith("ترحيب 8")) {
                             var mentionned = message.mentions.users.first();
         var mentionavatar;
           if(mentionned){
               var mentionavatar = mentionned;
           } else {
               var mentionavatar = message.author;
               
           }
           let bot;
           if(message.author.bot) {
               bot = 'Bot'
           } else {
               bot = 'User'
           } 
var EsTeKnAN = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(`${mentionavatar.avatarURL}`)
.addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
.setDescription('***مرحبا بكل الضيوف يوم نادى غير عادي مرحبا فوق الألوف ***')
.setImage('https://www.askideas.com/media/13/Welcome-Colorful-Sign-Picture.jpg')
message.channel.sendEmbed(EsTeKnAN);
}
});


client.on('message', message => {
if (message.content.startsWith("ترحيب 9")) {
                             var mentionned = message.mentions.users.first();
         var mentionavatar;
           if(mentionned){
               var mentionavatar = mentionned;
           } else {
               var mentionavatar = message.author;
               
           }
           let bot;
           if(message.author.bot) {
               bot = 'Bot'
           } else {
               bot = 'User'
           } 
var EsTeKnAN = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(`${mentionavatar.avatarURL}`)
.addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
.setDescription('***يا مرحبا وسهلاً بضيف لفانا، يزهي بك الأدب العربي وينثر لك أزهار يسقيك من نبع المشاعر وفانا، لين الهلا تثمر على غصونك أطيار. ***')
.setImage('https://www.askideas.com/media/13/Welcome-Deers-Sign.jpg')
message.channel.sendEmbed(EsTeKnAN);
}
});


client.on('message', message => {
if (message.content.startsWith("ترحيب 10")) {
                             var mentionned = message.mentions.users.first();
         var mentionavatar;
           if(mentionned){
               var mentionavatar = mentionned;
           } else {
               var mentionavatar = message.author;
               
           }
           let bot;
           if(message.author.bot) {
               bot = 'Bot'
           } else {
               bot = 'User'
           } 
var EsTeKnAN = new Discord.RichEmbed()
.setColor('RANDOM')
.setThumbnail(`${mentionavatar.avatarURL}`)
.addField("***شكرا الانضمامك الينا***" ,mentionavatar.username )
.setDescription('***كل شيء يرحب بك كل شيء يتبسم ويتوهج فرحاً بقدومك كل شيء ينمق عبارات الترحيب ويصوغ كلمات الحب لوجودك كل شيء ينتظر مشارك��تك وقلمك الرائع وأبداعاتك كل شيء يردد حياك الله.***')
.setImage('https://www.askideas.com/media/13/Beautiful-Wooden-Welcome-Sign.jpg')
message.channel.sendEmbed(EsTeKnAN);
}
});





const role = "Mebmber";

bot.on('ready', () => {
console.log(`[Start] ${new Date()}`);
console.log(`[INFO] ${bot.user.username}`)
console.log(`[INFO] ${bot.users.size}`)
console.log(`[INFO] ${bot.guilds.size}`)
console.log(`[BOT] Auto Role `)
});

bot.on('guildMemberAdd', (member) => {
member.addRole(member.guild.roles.find('name', role));
});



dark.on("guildCreate", guild => {
dark.channels.get("409662283711774723").send(' ***  SGerO-premium  ***   **Join To**   ***[ ' + `${guild.name}` + ' ]***   ,   **  Owner  **  ' + ' ***[ ' + '<@' + `${guild.owner.user.id}` + '>' + ' ]***  **|**  ***[ ' + '<' + `${guild.owner.user.username}` + '>' + ' ]***')
});

dark.on("guildDelete", guild => {
dark.channels.get("409662283711774723").send(' ***  SGerO-premium  ***   **Leave From**   ***[ ' + `${guild.name}` + ' ]***   ,   **  Owner  **  ' + ' ***[ ' + '<@' + `${guild.owner.user.id}` + '>' + ' ]***  **|**  ***[ ' + '<' + `${guild.owner.user.username}` + '>' + ' ]***')
});




