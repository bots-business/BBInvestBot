/*CMD
  command: /on-git-push
  help: 
  need_reply: 
  auto_retry_time: 
  folder: GitSync
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendMessage("Start code importing...");

// Bot.exportGit also possible
Bot.importGit({
  branch: "master", // it is master branch
  success: "on-git-import-complete"
})
