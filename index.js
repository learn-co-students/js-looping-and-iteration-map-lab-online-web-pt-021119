function lowerCaseDrivers(array){
  let newArray=array.map(driver => driver.toLowerCase());
  return newArray;
};

function nameToAttributes(array){
  let newArray=array.map(driver =>
    driver.split(' '));
  const array2 = [];
  for (const driver of newArray){
    let temp = {firstName: driver[0], lastName: driver[1]};
    array2.push(temp);
  };
  return array2;
};

function attributesToPhrase(array){
  let newArray=array.map(driver => `${driver['name']} is from ${driver['hometown']}`);
  return newArray;
};
