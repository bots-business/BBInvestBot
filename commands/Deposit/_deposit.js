/*CMD
  command: /deposit
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Deposit
  answer: 
  keyboard: 
  aliases: 💵 deposit
CMD*/

function getButton(coin){
   return { title: coin, command: "/new-deposit-address " + coin }
}

buttons = [
 [ 
   getButton("BTC"),
   getButton("LTC"),
 ]
]

Bot.sendInlineKeyboard(
  buttons,
  Libs.Lang.get().deposit.text
)

