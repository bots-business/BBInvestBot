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

var chat_for_news = Base.getConfigs.CHAT_FOR_NEWS_ABOUT_GIT_WEBHOOK
if(!chat_for_news){
  // no news about commits if no chat
  return
}

var info = "*New changes: *\n\n"

var webhook_info = JSON.parse(content);

var commits = webhook_info.commits;
for(ind in commits){
  commit = commits[ind];
  info = info + "➕ " + commit.message + " [view](" + commit.url + ")\n"
}

Api.sendMessage({
  text: info,
  chat_id: chat_for_news, // by default "@bbinvestnews"
  parse_mode: "Markdown",
  disable_web_page_preview: true
});