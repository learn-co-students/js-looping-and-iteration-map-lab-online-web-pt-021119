// Code your solution in this file.
function lowerCaseDrivers (drivers) {
   return drivers.map(function (drivers) { return drivers.toLowerCase()
   });
};

function nameToAttributes (drivers) {
   return drivers.map(function (drivers) {
     const driversFirstName = drivers.split(' ')[0];
     const driversLastName = drivers.split(' ')[1];

     return {firstName: driversFirstName, lastName: driversLastName};
   });
};

function attributesToPhrase (drivers) {
   return drivers.map(function (drivers) {
     return `${drivers.name} is from ${drivers.hometown}`;
   });
};
