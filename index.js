function lowerCaseDrivers(drivers) {
  return drivers.map(function(driver) { return driver.toLowerCase()});
}

function nameToAttributes(drivers){
	return drivers.map(function(driver){
		let newObject = {}
		newObject.firstName = driver.split(' ')[0]
		newObject.lastName = driver.split(' ')[1]
		return newObject
	});
}

function attributesToPhrase(drivers) {
  return drivers.map(function(driver) { return `${ driver.name} is from ${driver.hometown}`})
  
}
