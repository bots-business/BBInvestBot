/*CMD
  command: /menu
  help: 
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

joined = User.getProperty("joinedToChanell");
// only user joined to chanell can access to /menu
if(!joined){ return }

Bot.sendKeyboard(
  LANG.menu.buttons,
  LANG.menu.text
);
