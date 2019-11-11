/*CMD
  command: /resetpanels
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Admin
  answer: 
  keyboard: 
  aliases: 
CMD*/

// hard reset admin panels
function setupAdminPanels(){
  Bot.run({
    command: "setup_admin_panels",
    options: { setup: true }
  });
}

if(Base.isAdmin()){
  setupAdminPanels();
}