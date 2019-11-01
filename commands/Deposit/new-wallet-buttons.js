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

var coins = Base.getConfigs().coinPayments.acceptedCoins;

Base.getInlineButtons(coins, getButton)

Bot.editInlineKeyboard(
  buttons
)

