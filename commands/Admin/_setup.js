/*CMD
  command: /setup
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin
  answer: 
  keyboard: 
  aliases: 
CMD*/

// ===== START configs ==================

// You can add new language as new command.
// first language is default language
// See /lng-en command as example
// You can copy it as new command and make translation
// For example, make command /lng-fr with france language
// then add here new language e.g.: ['en', 'fr']
var languages = ['en'];

// Generic project configuration
// Change it
CONFIGS = {
  // change for yours admin id it is user.id
  ADMIN_ID: 1860,
  PROJECT_URL : "https://bots.business",
  CHANELL_NAME : "@BBInvest",
  CHANELL_URL : "https://t.me/bbinvest",
  // user must join to it on /start
  // repeat checking periodically
  // by default once at 1 hour
  // checking spent 1 iteration per user at hour by default
  // time in seconds
  CHANELL_JOINING_VALIDATION_TIME: 60*60,
  PROJECT_NAME : "Bots.Business Invest",
  PROJECT_SHORT_NAME : "Bots.Business",
  LANGUAGES: languages
}

// ===== END configs ==================

if(user.id != admin_id){
  Bot.sendMessage(
    "Access denied.\n\nYou can change `admin_id` in BJS\n" + 
    "for `/setup` command for access" + 
    "Your ID is `" + user.id + "`"
  )
  return
}

Bot.setProperty('CONFIGS', CONFIGS, "json");

Bot.run({ command: "/setup-languages", options: CONFIGS });
Bot.runCommand("/setup-git");

Bot.setProperty("is_bot_setupped", true, "boolean");

Bot.sendMessage("Setup complete");