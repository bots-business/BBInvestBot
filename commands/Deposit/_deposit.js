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

wallets = User.getProperty("wallets", {});

var trans = Libs.Lang.get().deposit;

var text = trans.text;
var button_text = trans.generateNewAddressButton

wallets_info = ""

for(coin in wallets){
  wallets_info = wallets_info + "*" + coin + "*: `" + wallets[coin] + "`\n";
}

if(wallets_info!=""){
  wallets_info = trans.yourWallets + wallets_info;
}else{
  wallets_info = trans.noWallets;
}

Bot.sendInlineKeyboard(
  [[ { title: button_text, command: "new-wallet-buttons" } ]],
  text + "\n\n" + wallets_info
)