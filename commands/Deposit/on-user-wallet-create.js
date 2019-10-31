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

Bot.sendMessage(inspect(options));

let wallet = options.result.address;
Bot.sendMessage("Your permanent wallet address is:\n`" + wallet + "`")