function lowerCaseDrivers(drivers) {
    return drivers.map(function (name) {return name.toLowerCase(); })
}

function nameToAttributes(drivers) {
    return drivers.map(function (name) {
    const newArray = name.split(" ");
    return {firstName: newArray[0], lastName: newArray[1]}; });

}

function attributesToPhrase(drivers) {
    return drivers.map(function (driver) {return `${driver.name} is from ${driver.hometown}`} );
}
        
