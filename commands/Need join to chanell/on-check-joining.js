/*CMD
  command: on-check-joining
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Need join to chanell

  <<ANSWER

  ANSWER
  keyboard: 
  aliases: 
CMD*/

function authorizeUser(){
  Base.showTopNotify(LANG.onCheckJoin.successMessage);

  Bot.editInlineKeyboard([]);
  User.setProperty("joinedToChanell", true, "boolean");
  Bot.runCommand("/menu");

  Bot.run( {
    command: "/check-joining as-task",
    run_after: 1*60*60,  // 1 hour delay
  })
}

// we have result from api in options
let status = options.result.status;

var isJoined = (
   (status == "member")||
   (status == "administrator")||
   (status == "creator")
)

if(isJoined){
  authorizeUser();
}else{
  Base.showAlert(LANG.onCheckJoin.notJoinMessage);
}
