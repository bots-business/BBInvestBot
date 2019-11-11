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

function setupAdminPanels(){
  Bot.run({
    command: "setup_admin_panels",
    options: { setup: true }
  });
}

if(!Base.isAdmin()){
  // setup can be runned by admin only
  // but need install Admin Panels if not exist
  if(!Base.haveAdminPanels()){
    setupAdminPanels();
  }
  return
}

// Bot.run({ command: "/configs", options:{ admin_id: ADMIN_ID } })

Bot.runCommand("setup-git");

Bot.sendMessage("Now you need setup CoinPayments Keys: /setupcoinpayments");