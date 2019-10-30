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

publish({
  isAdmin: isAdmin,
  getConfigs: getConfigs
})