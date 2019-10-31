/*CMD
  command: /new-deposit-address
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Deposit
  answer: 
  keyboard: 
  aliases:
CMD*/

coin = params;

Libs.CoinPayments.createPermanentWallet({
  currency: coin,
  label: "user" + user.id,
  onSuccess: "on-user-wallet-create " + coin,
  onIncome: "on-user-wallet-income " + coin
  
  // if you want customize error messages
  // onError: "/onError"
});