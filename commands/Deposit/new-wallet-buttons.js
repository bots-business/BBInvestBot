/*CMD
  command: new-wallet-buttons
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Deposit
  answer: 
  keyboard: 
  aliases:
CMD*/

function getButton(coin){
  return { title: coin, command: "new-deposit-address " + coin }
}

var coins = Base.toArray(
  Base.getConfigValue("CPOptions", "ACCEPTED_COINS")
)

buttons = Base.getInlineButtons(coins, getButton)

Bot.editInlineKeyboard(
  buttons
)

