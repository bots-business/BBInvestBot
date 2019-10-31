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
  [   { title: Libs.Lang.get().needJoin.buttons.goToChanell,
        url: "https://t.me/bbinvest"
      },
      { title: Libs.Lang.get().needJoin.buttons.checkJoin,
        command: "check-joining"
      }
  ],
  Libs.Lang.get().needJoin.text
);