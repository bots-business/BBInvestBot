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

msg = "💱 Send crypto coin to your generated address" +
  "\n\n" +
  "The transfer is *automatically* added to your deposit after *3 confirmations*.\n\n" +
  "⚠️ *Please note*: you need new address for every transfer for more security and transaction approving." +
  "\n\nYour transfer will be converted to USD" + 
  "\n\n👇 *Generate new address*: please select your coin"

function getButton(coin){
   return { title: coin, command: "/new-deposit-address " + coin }
}

buttons = [
 [ 
   getButton("BTC"),
   getButton("LTC"),
 ]
]

Bot.sendInlineKeyboard(buttons, msg)

