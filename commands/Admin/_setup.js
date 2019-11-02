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

var is_admin = Libs.Base.isAdmin(CONFIGS.ADMIN_ID); 
if(!is_admin){
  // setup can be runned by admin only
  return
}

Bot.run("/configs")

Bot.runCommand("setup-git");

Bot.sendMessage("Now you need setup CoinPayments Keys: /setupcoinpayments");