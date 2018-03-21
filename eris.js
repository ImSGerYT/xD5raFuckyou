const Eris = require("eris");
var Hello = "409659102453825537";
var SGerO = new Eris("MzgxNzczNTQxMTM5MjgzOTg4.DTVw0g.fjBDFsH4Dg1740V9-3GRXSulKyQ");
  
SGerO.on('ready', () =>  {
    console.log('I am fuck up down ready !!!')
});





SGerO.on("ready", ready => {
setInterval(function(){
 
            var currentTime = new Date(),
            hours = currentTime.getHours() + 0 ,
            minutes = currentTime.getMinutes(),
            seconds = currentTime.getSeconds(),
            years = currentTime.getFullYear(),
            month = currentTime.getMonth() + 1,
            day = currentTime.getDate(),
            week = currentTime.getDay();     




 
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            var suffix = "صباح";
            if (hours >= 12) {
                suffix = "مساء";
                hours = hours - 12;
            }
            if (hours == 0) {
                hours = 12;
            }

SGerO.editChannel("409659172083204106", {name : "🕢 Time   [" + hours + ":" + minutes  +" " + suffix + "]"}) 
SGerO.editChannel("409659229339648001", {name : "📅 Date " + "[" + day + "-" + month + "-" + years + "]"})
SGerO.editChannel("409659102453825537", {name : "|♛ š ♛|"})
SGerO.editChannel("409659102453825537", {name : "|♛ šĜ ♛|"})
SGerO.editChannel("409659102453825537", {name : "|♛ šĜє ♛|"})
SGerO.editChannel("409659102453825537", {name : "|♛ šĜєr ♛|"})
SGerO.editChannel("409659102453825537", {name : "|♛ šĜєrỐ ♛|"})
SGerO.editChannel("409659102453825537", {name : "|♛ šĜєrỐツ ♛|"})
SGerO.editChannel("409659102453825537", {name : "|♛ šĜєrỐツ ♛|"})
SGerO.editChannel("409659102453825537", {name : "|♛ šĜєrỐツ ♛|"})
SGerO.editChannel("409659102453825537", {name : "|♛ šĜєrỐツ ♛|"})
SGerO.editChannel("409659102453825537", {name : "|♛ šĜєrỐツ ♛|"})
SGerO.editChannel("409659102453825537", {name : "|♛ šĜєrỐ ♛|"})
SGerO.editChannel("409659102453825537", {name : "|♛ šĜєr ♛|"})
SGerO.editChannel("409659102453825537", {name : "|♛ šĜє ♛|"})
SGerO.editChannel("409659102453825537", {name : "|♛ šĜ ♛|"})

}, 6000);
 
});







SGerO.on("ready", ready => {
setInterval(function(){


SGerO.editChannel("409659349804384256", {name : `🏆 - Server 「${SGerO.guilds.size}」  `})

}, 6000);

});

SGerO.on("ready", ready => {
    setInterval(function(){
    
    
    SGerO.editChannel("409659382150987776", {name : `👑  - Users 「${SGerO.users.size} 」  `})
    
    }, 6000);

});

SGerO.connect ("MzgxNzczNTQxMTM5MjgzOTg4.DTVw0g.fjBDFsH4Dg1740V9-3GRXSulKyQ");