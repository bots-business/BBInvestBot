/*CMD
  command: /configs
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin
  answer: 
  keyboard: 
  aliases: 
CMD*/

var is_admin = Base.isAdmin(CONFIGS.ADMIN_ID); 
if(!is_admin){
  // setup can be runned by admin only
  return
}

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
  PROJECT_URL: "https://bots.business",
  CHANELL_NAME: "@BBInvest",
  CHANELL_URL: "https://t.me/bbinvest",
  // user must join to it on /start
  // repeat checking periodically
  // by default once at 1 hour
  // checking spent 1 iteration per user at hour by default
  // time in seconds
  CHANELL_JOINING_VALIDATION_TIME: 60*60,
  PROJECT_NAME: "Bots.Business Invest",
  PROJECT_SHORT_NAME: "Bots.Business",
  LANGUAGES: languages,
  coinPayments: {
    // accepted coins
    acceptedCoins: ['BTC', 'LTC']
  },
  // define buttons count in one row for Inline Keyboards
  INLINE_BUTTONS_COUNT_IN_ONE_ROW: 4,
  // news about git commits on git webhook
  CHAT_FOR_NEWS_ABOUT_GIT_WEBHOOK: "@bbinvestnews"
}

// ===== END configs ==================

Bot.setProperty('CONFIGS', CONFIGS, "json");

Bot.run({ command: "/setup-languages", options: CONFIGS });