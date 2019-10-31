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

var coins = Libs.getConfigs().coinPayments.acceptedCoins;

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

Bot.sendInlineKeyboard(
  buttons,
  Libs.Lang.get().deposit.text
)

