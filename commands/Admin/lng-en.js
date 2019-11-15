/*CMD
  command: lng-en
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin
  answer: 
  keyboard: 
  aliases: 
CMD*/

LANG_NAME = 'en'

PROJECT_DESCRIPTION = "works under Chat Bot Platform as Service - CBPaaS. Anybody can create chat bot."
PROJECT_BENEFITS = "📱 Bots.Business have mobile and web app."

if(completed_commands_count==0){ return }

// you can set individual configs for each language
// by default global configs used - see /setup command
PROJECT_URL = options.PROJECT_URL
CHANELL_NAME = options.CHANELL_NAME
CHANELL_URL = options.CHANELL_URL
PROJECT_NAME = options.PROJECT_NAME
PROJECT_SHORT_NAME = options.PROJECT_SHORT_NAME

var lang = {
  code: LANG_NAME,
  
  global: {
    PROJECT_URL: PROJECT_URL,
    CHANELL_NAME: CHANELL_NAME,
    CHANELL_URL: CHANELL_URL,
    PROJECT_NAME: PROJECT_NAME,
    PROJECT_SHORT_NAME: PROJECT_SHORT_NAME,
    PROJECT_DESCRIPTION: PROJECT_DESCRIPTION,
    PROJECT_BENEFITS: PROJECT_BENEFITS
  },

  flag: "🇺🇸",

  start: {
    text: "🌍 WELCOME TO " + PROJECT_NAME +
      "\n\n" +
      "✔️ The team of " + PROJECT_SHORT_NAME + " " + PROJECT_DESCRIPTION +
      "\n\n" +
      PROJECT_BENEFITS +
      "\n\n" +
      "|💰 You can invest in our team." +
      "\n\n" +
      "Link: " + PROJECT_URL
  },
  menu: {
    buttons: "Balance, Invest plans," + 
      "\n💵 Deposit," +
      "\n⚙ Options",
    text: "Main menu"
  },
  deposit: {
    text: "💱 Send crypto coin to your generated address" +
      "\n\n" +
      "The transfer is *automatically* added to your deposit after *3 confirmations*." +
      "\n\n⚠️ Your transfer will be *converted to USD*",
    yourWallets: "*Your current wallets*:\n",
    noWallets: "👇 Please generate new wallet now",
    generateNewAddressButton: "Generate new address"
  },
  needJoin: {
    text: "Please join this chanell for starting\n" + CHANELL_NAME,
    buttons: {
      goToChanell: "Go to " + CHANELL_NAME,
      checkJoin: "☑️ Joined"
    }
  },
  onCheckJoin: {
    successMessage: "✔️ Thank you!",
    notJoinMessage: "Please go to chanell " + CHANELL_NAME + " and join for continue."
  },
  options: {
    text: "Please setup options here",
    inlineButtons: [
      {
        title: "🌐 Language",
        command: "show-lang-buttons" // do not translate this
      }
    ],
    language: {
      successfullyChanged: "Changed to: "
    }
  }

}

Libs.Lang.setup(LANG_NAME, lang);
