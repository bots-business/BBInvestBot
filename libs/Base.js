function getConfigs(){
  // see /setup command for CONFIGS
  var configs = Bot.getProperty('CONFIGS');
  if(configs){ return configs }

  throw new Error("Need run /setup before using bot")
}

function isAdmin(admin_id){
  if(!admin_id){
    admin_id = getConfigs().ADMIN_ID;
  }
  if(user.id == admin_id){
    return true
  }
  Bot.sendMessage(
      "Access denied.\n\nYou can change `ADMIN_ID` in BJS\n" + 
      "for `/setup` command in configs sections" + 
      "\n\nYour ID is `" + user.id + "`"
  )
  return false;
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

publish({
  isAdmin: isAdmin,
  getConfigs: getConfigs,
  getInlineButtons: getInlineButtons
})