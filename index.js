// Code your solution in this file.
function  lowerCaseDrivers(list) {
  return list.map(name => name.toLowerCase())
}

function split(name) {
   return {firstName: name.split(' ')[0], lastName: name.split(' ')[1]};
}

function nameToAttributes(list) {
  return list.map(name => split(name));
}

function attributesToPhrase(list) {
  return list.map(function(driver) { 
    return `${driver.name} is from ${driver.hometown}` ;
  })
}