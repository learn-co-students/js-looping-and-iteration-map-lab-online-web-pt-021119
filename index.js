// Code your solution in this file.
function lowerCaseDrivers(drivers) {
  return drivers.map(function (driver) {return driver.toLowerCase()})
}

function nameToAttributes(drivers){
  return drivers.map(function (fullname) {
    let nameArray = fullname.split(" ");
    return Object.assign({},
        {firstName: nameArray[0], lastName: nameArray[1]});
  })
}

function attributesToPhrase (drivers) {
  return drivers.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`;
  })
}