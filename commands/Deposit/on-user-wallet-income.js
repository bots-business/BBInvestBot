/*CMD
  command: on-user-wallet-income
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Deposit
  answer: 
  keyboard: 
  aliases:
CMD*/

Bot.sendMessage("Successful income");

var coin = params;
Bot.sendMessage(inspect(options));

txn_id = options.txn_id;
Bot.sendMessage(txn_id);