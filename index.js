// Code your solution in this file.
function lowerCaseDrivers(arr){
  return arr.map(function(name) {
    return name.toLowerCase();
  });
}

function nameToAttributes(arr){
  const newArr = arr.map(function(name){
    return name.split(" ");
  });
  const newDrivers = [];
  for (const i in newArr) {
    newDrivers.push({firstName: newArr[i][0], lastName: newArr[i][1]});
  };
  return newDrivers;
}

function attributesToPhrase(arr){
  return arr.map(function(driver){
    return `${driver.name} is from ${driver.hometown}`
  });
}
