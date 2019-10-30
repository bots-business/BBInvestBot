/*CMD
  command: /setupcoinpayments
  help:
  need_reply: true
  auto_retry_time:
  folder: Admin
  <<ANSWER
Please input your *Coinpayments keys* and *BB Api Key*
Get your keys [here](https://www.coinpayments.net/index.php?cmd=acct_api_keys)
Need Private and Public keys

Get your *BB Api Key* from Bots.Business App in *Profile*

Please input *each key on new line* in one message!
Example:
Private key
Public key
BB Api key
  ANSWER
  keyboard:
  aliases:
CMD*/

if(!Libs.Base.isAdmin()){
  // setup can be runned by admin only
  return
}

keys = message.split("\n");
if(keys.length!=3){
  Bot.sendMessage(
    "Please input *each key on new line* in one message!" +
    "\n\n*Example:*" +
    "\nPrivate key" +
    "\nPublic key" +
    "\nBB Api key" +
    "\n\n try again /setupcoinpayments"
  );
  return
}

// This keys is strongly secure!
// Do not share them

// Get your keys in https://www.coinpayments.net/index.php?cmd=acct_api_keys
Bot.sendMessage("Set CoinPayments Private Key: " + keys[0]);
Libs.CoinPayments.setPrivateKey(keys[0]);

Bot.sendMessage("Set CoinPayments Public Key: " + keys[1]);
Libs.CoinPayments.setPublicKey(keys[1]);

// Get your BB Api Key from Bots.Business App in Profile
Bot.sendMessage("Set BB Api Key: " + keys[2]);
Libs.CoinPayments.setBBApiKey(keys[2]);

Bot.setProperty("is_bot_setupped", true, "boolean");