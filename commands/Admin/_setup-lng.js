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

if(completed_commands_count==0){ return }

PROJECT_URL = "https://bots.business"
CHANELL_NAME = "@BBInvest"  // user must join to it on /start
CHANELL_URL = "https://t.me/bbinvest"
PROJECT_NAME = "Bots.Business Invest"
PROJECT_SHORT_NAME = "Bots.Business"
PROJECT_DESCRIPTION = "works under Chat Bot Platform as Service - CBPaaS. Anybody can create chat bot."
PROJECT_BENEFITS = "📱 Bots.Business have mobile and web app."

enLang = {
  global: {
    PROJECT_URL: PROJECT_URL,
    CHANELL_NAME: CHANELL_NAME,
    CHANELL_URL: CHANELL_URL,
    PROJECT_NAME: PROJECT_NAME,
    PROJECT_SHORT_NAME: PROJECT_SHORT_NAME,
    PROJECT_DESCRIPTION: PROJECT_DESCRIPTION,
    PROJECT_BENEFITS: PROJECT_BENEFITS
  },

  start: {
    text: "🌍 WELCOME TO " + PROJECT_NAME +
      ">n>n" +
      "✔️ The team of " + PROJECT_SHORT_NAME + PROJECT_DESCRIPTION +
      ">n>n" +
      PROJECT_BENEFITS +
      ">n>n" +
      "|💰 You can invest in our team." +
      ">n>n" +
      "Link: " + PROJECT_URL
  },
  menu: {
    buttons: "Balance, Invest plans,>n" + 
      "💵 Deposit",
    text: "Main menu"
  },
  deposit: {
    text: "💱 Send crypto coin to your generated address" +
      ">n>n" +
      "The transfer is *automatically* added to your deposit after *3 confirmations*.>n>n" +
      "⚠️ *Please note*: you need new address for every transfer for more security and transaction approving." +
      ">n>nYour transfer will be converted to USD" + 
      ">n>n👇 *Generate new address*: please select your coin"
  },
  needJoin: {
    text: "Please join this chanell for starting>n" + CHANELL_NAME,
    buttons: {
      goToChanell: "Go to " + CHANELL_NAME,
      checkJoin: "☑️ Joined"
    }
  },
  onCheckJoin: {
    successMessage: "✔️ Thank you!",
    notJoinMessage: "Please go to chanell " + CHANELL_NAME + " and join for continue."
  }

}


// first language is default language
Libs.Lang.setup("en", enLang);

Bot.sendMessage("Multi Languages - installed");