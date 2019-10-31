/*CMD
  command: check-joining
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Need join to chanell
  answer: 
  keyboard: 
  aliases: 
CMD*/

var chanell = "@BBInvest"
var on_result = "on-check-joining" 

if(params=="as-task"){
  on_result = "task-on-check-joining";
}

Api.getChatMember({
  chat_id: chanell,
  user_id: user.telegramid,
  on_result : on_result
})

