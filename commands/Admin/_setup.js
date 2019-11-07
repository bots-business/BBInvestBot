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

let ADMIN_ID = 1860;

var is_admin = Libs.Base.isAdmin(ADMIN_ID); 
if(!is_admin){
  // setup can be runned by admin only
  return
}

Bot.run({
  command: "setup_admin_panels",
  options: { setup: true }
});

Bot.run({ command: "/configs", options:{ admin_id: ADMIN_ID } })

Bot.runCommand("setup-git");

Bot.sendMessage("Now you need setup CoinPayments Keys: /setupcoinpayments");