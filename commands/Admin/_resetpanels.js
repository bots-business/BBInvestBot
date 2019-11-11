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
if(Base.isAdmin()){
  setupAdminPanels();
}