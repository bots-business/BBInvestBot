/*CMD
  command: need-join
  help: 
  need_reply: 
  auto_retry_time: 
  folder: Need join to chanell
  answer: 
  keyboard: 
  aliases: 
CMD*/

Bot.sendInlineKeyboard(
  [   { title: LANG.needJoin.buttons.goToChanell,
        url: "https://t.me/bbinvest"
      },
      { title: LANG.needJoin.buttons.checkJoin,
        command: "check-joining"
      }
  ],
  LANG.needJoin.text
);