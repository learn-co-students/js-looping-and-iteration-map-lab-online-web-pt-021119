// Code your solution in this file.

function lowerCaseDrivers(drivers) {
  const new_drivers = drivers.map(function(driver) {
    return driver.toLowerCase();
  });
  return new_drivers;
};

function nameToAttributes(drivers) {
  const attributed_drivers = drivers.map(function(driver) {
    return { firstName: driver.split(" ")[0], lastName: driver.split(" ")[1] };
  });
  return attributed_drivers;
};

function attributesToPhrase(drivers) {
  const sentences = drivers.map(function(driver) {
    return `${driver.name} is from ${driver.hometown}`
  });
  return sentences;
};
