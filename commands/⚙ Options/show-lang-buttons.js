/*CMD
  command: show-lang-buttons
  help: 
  need_reply: 
  auto_retry_time: 
  folder: ⚙ Options
  answer: 
  keyboard: 
  aliases:
CMD*/

function getButton(lang){
  return { title: lang, command: "set-cur-language " + lang }
}

var langs = Base.getConfigs().LANGUAGES;
Base.getInlineButtons(langs, getButton);

Bot.editInlineKeyboard(
  langs
)





