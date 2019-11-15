function getAdminTgId(){
  return AdminPanel.getFieldValue({
    panel_name: "AdminInfo",
    field_name: "ADMIN_TG_ID"
  })
}

function isAdmin(){
  if(!user){ return false }
  admin_id = getAdminTgId();

  var admin_id_note = "You need set correct ADMIN TG ID in Admin Panel." +
    "\n\nYour ID is `" + user.telegramid + "`"
  
  if(!admin_id){
    Bot.sendMessage(admin_id_note)
    return
  }

  if(user.telegramid == admin_id){ return true }

  Bot.sendMessage("Access denied.\n\n" + admin_id_note)
  return false;
}

function haveAdminPanels(){
  return AdminPanel.getPanel("AdminInfo")
}

function getConfigValue(panel_name, field_name){
  return AdminPanel.getFieldValue({
    panel_name: panel_name,
    field_name: field_name
  })
}

function getInlineButtons(items, build_btn_callback){
  // Generate inline buttons
  row_buttons_count = getConfigValue("AdvancedOptions", "INLINE_BUTTONS_COUNT_IN_ONE_ROW");
  buttons = []
  line = []
  
  for(index in items){
    
    line.push(
      build_btn_callback(items[index])
    );

    if(line.length > row_buttons_count){
      // 4 buttons per row
      buttons.push(line);
      line = []
    }
  }

  if(line[0]){ buttons.push(line); }
  return buttons
}

function toArray(str){
  if(!str){ return [] }
  str = str.split(" ").join("")  // remove space
  return str.split(",")
}

function getLanguages(){
  var lngs = getConfigValue("LanguagesOptions", "LANGUAGES");
  return toArray(lngs);
}

function showWarning(message, isAlert){
  Api.answerCallbackQuery({
    callback_query_id: request.id,
    text: message,
    show_alert: isAlert // or false - for alert on top
  })
}

function showTopNotify(message){
  // show top notify after inline button pressing
  showWarning(message, false)
}

function showAlert(message){
  // show alert after inline button pressing
  showWarning(message, true)
}

function sendMessageToAdmin(msg){
  Bot.sendMessageToChatWithId(
    Base.getAdminTgId(),
    msg
  )
}

publish({
  getAdminTgId: getAdminTgId,
  isAdmin: isAdmin,
  haveAdminPanels: haveAdminPanels,
  getConfigValue: getConfigValue,
  getInlineButtons: getInlineButtons,
  showTopNotify: showTopNotify,
  showAlert: showAlert,
  getLanguages: getLanguages,
  toArray: toArray,
  sendMessageToAdmin: sendMessageToAdmin
})