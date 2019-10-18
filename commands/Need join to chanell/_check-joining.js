/*CMD
  command: /check-joining
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Need join to chanell
  answer: 
  keyboard: 
  aliases: 
CMD*/

var chanell = "@BBInvest"
var on_result = "/on-check-joining" 

if(params=="as-task"){
  on_result = "/task-on-check-joining";
  
  // repeat checking periodically - 1 once at hour
  Bot.run( {
    command: "/check-joining as-task",
    run_after: 1*60*60,  // 1 hour delay
  })
}

Api.getChatMember({
  chat_id: chanell,
  user_id: user.telegramid,
  on_result : on_result
})

