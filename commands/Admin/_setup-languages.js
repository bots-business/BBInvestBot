/*CMD
  command: /setup-languages
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin
  answer: 
  keyboard: 
  aliases: 
CMD*/

// can runned only by admin or from Admin Panel
var can_run = ( Base.isAdmin() || !user )
if(!can_run){ return }

var languages = Base.getLanguages();

for(var i in languages){
  cmdName = "lng-" + languages[i];
  Bot.run({ command: cmdName, options: CONFIGS })
}

Bot.sendMessage("Multi Languages - installed");