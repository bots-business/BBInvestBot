/*CMD
  command: /setup-lng
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin
  answer: 
  keyboard: 
  aliases: 
CMD*/

// You can add new language as new command.
// See /lng-en command.
// You can copy it as new command and make translation
var languages = ['en'];  // add here new language e.g.: ['en', 'it', 'ru']
// first language is default language

// It is common project description
// Change it
options = {
  PROJECT_URL : "https://bots.business",
  CHANELL_NAME : "@BBInvest",  // user must join to it on /start
  CHANELL_URL : "https://t.me/bbinvest",
  PROJECT_NAME : "Bots.Business Invest",
  PROJECT_SHORT_NAME : "Bots.Business"
}

for(var i in languages){
  cmdName = "/lng-" + languages[i];
  Bot.run({ command: cmdName, options: options })
}

Bot.sendMessage("Multi Languages - installed");