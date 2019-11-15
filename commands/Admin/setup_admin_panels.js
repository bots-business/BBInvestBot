/*CMD
  command: setup_admin_panels
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin
  answer: 
  keyboard: 
  aliases: 
CMD*/

// can be runned only from /setup
if(!options){ return }
if(!options.setup){ return }

function setPanel(panel_name, data){
  AdminPanel.setPanel({
    panel_name: panel_name,
    data: data
  });
}

var panel = {
  title: "Admin Information",
  description: "Please fill here your admin id",
  index: 0,
  icon: "key",

  fields: [
    {
      name: "ADMIN_TG_ID",
      title: "Admin ID",
      description: "you can get your admin_id with BJS Bot.sendMessage(user.telegramid)",
      type: "string",
      placeholder: "your admin id"
    }
  ]
}
setPanel("AdminInfo", panel);


var panel = {
  title: "General information",
  description: "Common bot data.",
  button_title: "Save information",
  index: 1,
  icon: "information",
  // need resetup languages because theys use this info 
  on_saving:{
    command: "/setup-languages"
  },

  fields: [
    {
      name: "PROJECT_NAME",
      title: "Name",
      description: "for example: My Invest Bot",
      type: "string",
      icon: "document"
    },
    {
      name: "PROJECT_SHORT_NAME",
      title: "Short name",
      description: "for example: mIB",
      type: "string",
      icon: "bookmark"
    },
    {
      name: "PROJECT_URL",
      title: "Project url",
      description: "for example: http://my-project.com",
      type: "string",
      icon: "link",
      placeholder: "http://my-project.com"
    }
  ]
}
setPanel("GeneralInformation", panel);




var panel = {
  title: "Bot chanell setting",
  description: "Information about bot chanell.",
  button_title: "Save chanell settings",
  index: 2,
  icon: "chatbubbles",

  fields: [
    {
      name: "CHANELL_NAME",
      title: "Chanell name",
      description: "for example: @mychanell. User must join to it on bots starting",
      type: "string",
      icon: "chatboxes"
    },
    {
      name: "CHANELL_URL",
      title: "Chanell url",
      description: "for example: https://t.me/mychanell. User must join to it on bots starting",
      type: "string",
      icon: "link"
    },
    {
      name: "CHANELL_JOINING_VALIDATION_TIME",
      title: "Joining validation time in seconds",
      description: "Repeat checking periodically. Checking spent 1 iteration.",
      value: 60*60,
      icon: "time",
      placeholder: "time in seconds"
    }
  ]
}
setPanel("Chanell", panel);


var panel = {
  title: "CoinPayments.net setting",
  description: "Setting for CoinPayments. You can recieve and transfer payments.",
  button_title: "Save",
  index: 3,
  icon: "card",
  on_saving:{
    command: "/setupcoinpayments"
  },
  fields: [
    {
      name: "ACCEPTED_COINS",
      title: "Accepted coins",
      description: "Coins with commas. For example: btc, ltc, eth",
      type: "string",
      icon: "wallet",
      value: "BTC, LTC, WAVES"
    },
    {
      name: "PRIVATE_KEY",
      title: "Private key",
      description: "Please get this secure key in CoinPayments panel",
      type: "password",
      icon: "lock",
    },
    {
      name: "PUBLIC_KEY",
      title: "Public key",
      description: "Please get this secure key in CoinPayments panel",
      type: "password",
      icon: "key",
    },
    {
      name: "BB_KEY",
      title: "BB Api key",
      description: "Please get this secure key in Profile",
      type: "password",
      icon: "key",
    },
    {
      name: "info",
      title: "⚠️ You need set IPN secret also.",
      description: "Please see this https://help.bots.business/libs/coinpayments#setup-set-ipn-secret",
      icon: "alert"
    }
  ]
}
setPanel("CPOptions", panel);


var panel = {
  title: "Languages",
  description: "Multi languages settings",
  button_title: "Save",
  index: 4,
  icon: "flag",
  on_saving: {
    command: "/setup-languages"
  },

  fields: [
    {
      name: "LANGUAGES",
      title: "Languages with commas. For example en, fr, it",
      description: "You need languages file",
      type: "string",
      value: "en",
      icon: "filing"
    },
  ]
}
setPanel("LanguagesOptions", panel);


var panel = {
  title: "Git Sync options",
  description: "Make development easy with Git Sync. See https://help.bots.business/git/automatic-importing-on-git-push",
  button_title: "Save Git options",
  index: 5,
  icon: "cloud-download",

  fields: [
    {
      name: "CHAT_FOR_NEWS_ABOUT_GIT_WEBHOOK",
      title: "Chat name for posting Git news",
      description: "for example: @mychanell. Bot send commits info on sync to this chanell",
      type: "string",
      icon: "chatboxes"
    },
  ]
}
setPanel("GitSync", panel);


var panel = {
  title: "Advanced options",
  description: "Advanced bot options",
  button_title: "Save options",
  index: 6,
  icon: "construct",

  fields: [
    {
      name: "INLINE_BUTTONS_COUNT_IN_ONE_ROW",
      title: "Inline buttons count in one row. 2 - 6",
      description: "Use this option to set row buttons count for inline keyboard",
      type: "integer",
      value: 4,
      icon: "keypad"
    },
  ]
}
setPanel("AdvancedOptions", panel);



Bot.sendMessage("Admin Panels - installed");