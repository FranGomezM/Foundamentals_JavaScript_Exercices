const add = function() {
  let result = 0;
  for (let i = 0; i < arguments.length; i++) {
      result += arguments[i];
  }
  return result;
};

const subtract = function(a, b) {
	let result = arguments[0];
  for (let i = 1; i < arguments.length; i++) {
      result -= arguments[i];
  }
  return result;
};

const sum = function(array) {
	if (array.length === 0){
    return 0
  }
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
};

const multiply = function(array) {
  if (array.length === 0){
    return 0
  }
  let result = 1;
  for (let i = 0; i < array.length; i++) {
    result *= array[i];
  }
  return result;
};

const power = function(num, times) {
	let result = 1;
  for (let i = 0; i < times; i++) {
    result *= num;
  }
  return result;
};

const factorial = function(num) {
  let result = 1;
  if (num === 0) {
    return 1;
  }
  else {
    for (let i = num; i > 1; i--) {
      result *= i;
    }
    return result;
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
