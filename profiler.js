const Discord = require("discord.js"); // بكج
const bot = new Discord.Client({disableEveryone: true});
const Canvas = require('canvas') // بكج
const fs = module.require("fs"); //بكج
const r1 = require('snekfetch'); //بكج
 
 
//var يعني تختصر للحاجه زي منا عامل كدة
 
var copy = "! ImSGer"
 
 
var mo = "الفلوس"
var po = "النقاط"
var lev = "الفل"
 
 
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`By : ! EtWrk.`);
        console.log(`---------------`);
      console.log(`ON ${client.guilds.size} Servers `);
    console.log(`---------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`By : ! EtWrk.`)
}); // نهايه الكود
 
 
 
bot.on('message', message => {
 
if (message.content.startsWith("^profile")) { // الامر
 let canvas = new Canvas(300, 300) //حجم الصوره الي هتظهر
 let ctx = canvas.getContext('2d')
    let Image = Canvas.Image
   
   
                      //  ava.src = buf;
 
    fs.readFile(__dirname + '/images_profile/profile.png', function(err, picture) { //مكان الصوره
      if (err) throw err
      var img = new Image
                var url = message.author.avatarURL; //افتار صورتك
        url = url.substring(0, url.indexOf('?'));
 
        r1.get(url).then(res => {
            var dataURL = res.body.toString('base64');
            dataURL = 'data:image/png;base64,' + dataURL;
            img.onload = function() {
 
                ctx.save();
            ctx.beginPath();
            ctx.arc(54, 103, 47, 0, Math.PI * 2, true); // احدثيات الدائره
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(img, 8, 57, 92, 92); // الصوره
            ctx.restore();
            }
            img.src = dataURL;
        });
       
      img.onload = () => {
        ctx.drawImage(img, 1, 1, 300, 300)
     //   ctx.drawImage(message.author.avatarURL, 152, 27, 95, 95);
        ctx.font = "regular 11px Cairo" // نوع الخط وحجمه
        ctx.fillStyle = "#9f9f9f" // لون الخط
        ctx.fillText(`${message.author.username}`, 140, 137)
        ctx.fillText(`${mo}  `, 143, 219) //money
        ctx.fillText(`${po}`, 120, 202) // النقاط
 
        //Level
        ctx.font = "regular 21px Cairo"
        ctx.fillStyle = "#ffffff"
        ctx.fillText(`${lev}`, 47, 255) //لفل
 
        ctx.save()
       
      }
      img.src = picture
           
    })
       
   
 
   
 
    setTimeout(function() {
      fs.readFile(__dirname + '/images_profile/diamond_prof_bg.png', function(err, picture) {
        if (err) throw err
        var img = new Image
        img.onload = () => {
          ctx.drawImage(img, -1, -1, 0, 0)
        }
        img.src = picture
        let inventoryPicture = canvas.toDataURL()
        let data = inventoryPicture.replace(/^data:image\/\w+;base64,/, "")
        let buf = new Buffer(data, 'base64')
      fs.writeFile(`image.png`, buf)
     
        message.channel.send("", {
          file: `image.png`
        })
      })
    }, 1000)
 
 
    function roundedImage(x, y, width, height, radius) {
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
    }
 
    function wrapText(context, text, x, y, maxWidth, lineHeight) {
 
      var words = text.split(' '),
        line = '',
        lineCount = 0,
        i,
        test,
        metrics;
 
      for (i = 0; i < words.length; i++) {
        test = words[i];
        metrics = context.measureText(test);
        while (metrics.width > maxWidth) {
 
          test = test.substring(0, test.length - 1);
          metrics = context.measureText(test);
        }
        if (words[i] != test) {
          words.splice(i + 1, 0, words[i].substr(test.length))
          words[i] = test;
        }
 
        test = line + words[i] + ' ';
        metrics = context.measureText(test);
 
        if (metrics.width > maxWidth && i > 0) {
          context.fillText(line, x, y);
          line = words[i] + ' ';
          y += lineHeight;
          lineCount++;
        } else {
          line = test;
        }
      }
 
      ctx.fillText(line, x, y);
    }
 
 
 
 
};
 
 
 
 
});
 
 
bot.login("MzgxNzczNTQxMTM5MjgzOTg4.DTVw0g.fjBDFsH4Dg1740V9-3GRXSulKyQ"); //تكون بوتك هنا