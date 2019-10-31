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

var coins = Libs.Base.getConfigs().coinPayments.acceptedCoins;

// Generate inline buttons
buttons = []
line = []
for(index in coins){
  line.push( getButton(coins[index]) );

  if(line.length > 4){
    // 4 buttons per row
    buttons.push(line);
    line = []
  }
}

if(line[0]){ buttons.push(line); }

Bot.editInlineKeyboard(
  buttons
)

