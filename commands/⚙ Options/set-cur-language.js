/*CMD
  command: set-cur-language
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ⚙ Options
  answer: 
  keyboard: 
  aliases:
CMD*/

var lng_code = params;

Libs.Lang.user.setLang(lng_code);

Base.showTopNotify(LANG.options.language.successfullyChanged + lng_code);

// Go to back in keyboard to Options
Bot.editInlineKeyboard(
  LANG.options.inlineButtons
)