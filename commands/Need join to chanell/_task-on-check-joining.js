/*CMD
  command: /task-on-check-joining
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Need join to chanell
  answer: 
  keyboard: 
  aliases: 
CMD*/

// we have result from api in options
let status = options.result.status;

var isJoined = (
   (status == "member")||
   (status == "administrator")||
   (status == "creator")
)

// user has left chanell
if(!isJoined){
  User.setProperty("joinedToChanell", false, "boolean");
  Bot.runCommand("/need-join");
  return
}

// repeat checking periodically - 1 once at hour
// user can leave chat anytime
Bot.run( {
  command: "/check-joining as-task",
  run_after: 1*60*60,  // 1 hour delay
})
