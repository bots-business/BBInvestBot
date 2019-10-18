/*CMD
  command: /need-join
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Need join to chanell
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendInlineKeyboard(
  [  { title: "Go to @BBInvest", url: "https://t.me/bbinvest"},
     { title: "☑️ Joined", command: "/check-joining" }
  ],
  "Please join this chanell for starting\n@bbinvest"
);
