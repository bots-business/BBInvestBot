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

setupAdminPanels();

Bot.run({ command: "/setup-languages" });

Bot.runCommand("setup-git");