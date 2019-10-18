/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

welcomeMsg = "🌍 WELCOME TO Bots.Business Invest" +
"\n\n" +
"✔️ The team of Bots.Business  works under Chat Bot Platform as Service - CBPaaS." +
"Anybody can create chat bot." +
"\n\n" +
"📱 Bots.Business have mobile and web app." +
"\n\n" +
"|💰 You can invest in our team." +
"\n\n" +
"Link: https://bots.business"

Bot.sendMessage(welcomeMsg);

need_join = User.getProperty("joinedToChanell");
if(!need_join){
  // if user not joined to chanell yet:
  Bot.runCommand("/need-join");
}else{
  // user was already join to chanell
  Bot.runCommand("/menu");
}




