function isAdmin(){
  admin_id = AdminPanel.getPanelValue({
    panel: "AdminInfo",
    name: "ADMIN_ID"
  })

  var admin_id_note = "You need set correct ADMIN_ID in Admin Panel." +
    "\n\nYour ID is `" + user.id + "`"
  
  if(!admin_id){
    Bot.sendMessage(admin_id_note)
    return
  }

  if(user.id == admin_id){ return true }

  Bot.sendMessage("Access denied.\n\n" + admin_id_note)
  return false;
}

function haveAdminPanels(){
  return AdminPanel.getPanel("AdminInfo")
}

function getConfigValue(panel_name, field_name){
  return AdminPanel.getPanelValue({
    panel: panel_name,
    name: field_name
  })
}

function getConfigs(){
  throw new Error("getConfigs is deprecated");
}

function getInlineButtons(items, build_btn_callback){
  // Generate inline buttons
  row_buttons_count = getConfigs().INLINE_BUTTONS_COUNT_IN_ONE_ROW;
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

publish({
  isAdmin: isAdmin,
  haveAdminPanels: haveAdminPanels,
  getConfigValue: getConfigValue,
  getInlineButtons: getInlineButtons,
  showTopNotify: showTopNotify,
  showAlert: showAlert,
  getConfigs: getConfigs
})