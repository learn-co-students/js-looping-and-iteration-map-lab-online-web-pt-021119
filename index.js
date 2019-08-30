function lowerCaseDrivers(drivers){
	return drivers.map(function (driver){return driver.toLowerCase()})
}

function nameToAttributes(drivers){
	return drivers.map(function(driver){
		let separatedName = {}
		separatedName.firstName = driver.split(' ')[0]
		separatedName.lastName = driver.split(' ')[1]
		return separatedName
	});
}

function attributesToPhrase(drivers){
	return drivers.map(function(driver){ return `${driver.name} is from ${driver.hometown}`})
}