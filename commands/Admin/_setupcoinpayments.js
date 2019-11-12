/*CMD
  command: /setupcoinpayments
  help:
  need_reply:
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

if(user){
  // setup can be runned by on saving panel only
  return
}

// This keys is strongly secure!
// Do not share them

// Get your keys in https://www.coinpayments.net/index.php?cmd=acct_api_keys

var private_key = getConfigValue("CPOptions", "PRIVATE_KEY")
var public_key = getConfigValue("CPOptions", "PUBLIC_KEY")
var bb_key = getConfigValue("CPOptions", "BB_KEY")

Libs.CoinPayments.setPrivateKey(private_key);
Libs.CoinPayments.setPublicKey(public_key);
Libs.CoinPayments.setBBApiKey(bb_key);

Bot.sendMessageToChatWithId(
  Base.getAdminTgId(),
  "CoinPayments keys - installed" +
  "\n\n⚠️ You need set IPN secret also." + 
  "\nPlease see this [help](https://help.bots.business/libs/coinpayments#setup-set-ipn-secret)"
)