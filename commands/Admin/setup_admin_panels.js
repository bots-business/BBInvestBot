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

var panel = {
  title: "General information",
  description: "Common bot data.",
  button_title: "Save information",

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
      icon: "link"
    }
  ]
}

AdminPanel.setPanel("GeneralInformation", panel);


var panel = {
  title: "Bot chanell setting",
  description: "Information about bot chanell.",
  button_title: "Save chanell settings",

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
    }
  ]
}

AdminPanel.setPanel("Chanell", panel);

var panel = {
  title: "Git Sync options",
  description: "Make development easy with Git Sync. See https://help.bots.business/git/automatic-importing-on-git-push",
  button_title: "Save Git options",

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

AdminPanel.setPanel("gitSync", panel);


Bot.sendMessage("Admin Panels - installed");