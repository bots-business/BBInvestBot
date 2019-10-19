/*CMD
  command: /setup-git
  help: 
  need_reply: 
  auto_retry_time: 
  folder: GitSync
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(completed_commands_count==0){ return }

url = Libs.Webhooks.getUrlFor(
   { command: "on-git-push", user_id: user.id }
)

Bot.sendMessage("If you need Git Sync please see: https://help.bots.business/git/automatic-importing-on-git-push");
Bot.sendMessage("Your Git payload url: `" + url + "`" );
