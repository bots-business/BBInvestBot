let LIB_PREFIX = 'lang_lib_'

function setUserLanguage(curLangName){
  User.setProperty(LIB_PREFIX + 'curLangName', curLangName, 'string');
}

function getUserLanguage(){
  let lng = User.getProperty(LIB_PREFIX + 'curLangName');
  if(lng){
    let json = Bot.getProperty(LIB_PREFIX + lng);
    if(json){ return lng }
  }
  return getDefaultLanguage();
}

function setDefaultLanguage(langName){
  Bot.setProperty(LIB_PREFIX + 'default', langName, 'string');
}

function getDefaultLanguage(){
  return Bot.getProperty(LIB_PREFIX + 'default');
}

function setupLanguage(langName, keys){
  var text = JSON.stringify(keys)
  text = text.split("\\n").join("⋱"); // multilines fix
  fixedKeys = JSON.parse(text);

  Bot.setProperty(LIB_PREFIX + langName, fixedKeys, 'json');
  let def = getDefaultLanguage();
  if(!def){ setDefaultLanguage(langName) }
}

function get(lang){
  let curLng
  if(lang){ curLng = lang }
  else{
    curLng = getUserLanguage();
  }

  let json = Bot.getProperty(LIB_PREFIX + curLng);
  if(!json){
    throw 'Language is not setup: ' + curLng;
  }

  var text = JSON.stringify(keys)
  text = text.split("⋱").join("\\n"); // multilines fix
  json = JSON.parse(text);

  return json
}

publish({
  user:{
    setLang: setUserLanguage,
    getCurLang: getUserLanguage
  },
  default:{
    setLang: setDefaultLanguage,
    getCurLang: getDefaultLanguage
  },
  setup: setupLanguage,
  get: get
})