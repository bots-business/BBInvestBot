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
      name: "PROJECT_URL",
      title: "Project url",
      description: "for example: http://my-project.com",
      type: "string",
      icon: "bulb"
    },

    {
      name: "CHANELL_NAME",
      title: "Chanell name",
      description: "for example: @mychanell. User must join to it on bots starting",
      type: "string",
      icon: "bulb"
    },

    {
      name: "CHANELL_URL",
      title: "Chanell url",
      description: "for example: https://t.me/mychanell. User must join to it on bots starting",
      type: "string",
      icon: "bulb"
    },

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
      icon: "bulb"
    },

    {
      name: "CHANELL_URL",
      title: "Chanell url",
      description: "for example: https://t.me/mychanell. User must join to it on bots starting",
      type: "string",
      icon: "bulb"
    },

  ]
}

AdminPanel.setPanel("Chanell", panel);

Bot.sendMessage("Admin Panels - installed");