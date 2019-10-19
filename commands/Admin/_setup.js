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

// change this id for yours
admin_id = 1860
// you can get your id via:
// Bot.sendMessage(user.id)

if(user.id != admin_id){
  Bot.sendMessage("Access denied.\n\nYou can change `admin_id` in BJS\nfor `/setup` command for access")
  return
}

Bot.runCommand("/setup-lng");
Bot.runCommand("/setup-git");

Bot.setProperty("is_bot_setupped", true, "boolean");
