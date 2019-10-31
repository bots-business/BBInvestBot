/*CMD
  command: on-user-wallet-create
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Deposit
  answer: 
  keyboard: 
  aliases:
CMD*/

coin = params;
let wallet = options.result.address;

Bot.sendMessage(
  "Your permanent *" + coin + " wallet address is*:\n\n`"
  + wallet + "`"
)

wallets = User.getProperty("wallets", {});

wallets[coin] = wallet;

User.setProperty("wallets", wallets, "json");