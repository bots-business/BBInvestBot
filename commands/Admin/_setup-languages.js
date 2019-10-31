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

var CONFIGS = options

var languages = CONFIGS.LANGUAGES;

for(var i in languages){
  cmdName = "lng-" + languages[i];
  Bot.run({ command: cmdName, options: CONFIGS })
}

Bot.sendMessage("Multi Languages - installed");