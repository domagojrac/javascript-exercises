const add = function() {
  var sum = 0;

  for (var i = 0, j = arguments.length; i < j; i++) {
    sum += arguments[i];
  };

  return sum;
};

const subtract = function() {
	var sum = arguments[0];

  for (var i = 1, j = arguments.length; i < j; i++) {
    sum -= arguments[i];
  };

  return sum;
};

const sum = function() {
	var sum = 0;

  for (var i = 0, j = arguments[0].length; i < j; i++) {
    sum += arguments[0][i];
  };

  return sum;
};

const multiply = function() {
  var sum = 1;

  for (var i = 0, j = arguments[0].length; i < j; i++) {
    sum *= arguments[0][i];
  };

  return sum;
};

const power = function() {
    var num = arguments[0];
  
    for (var i = 1, j = arguments.length; i < j; i++) {
      num **= arguments[i];
    };
  
    return num;
};

const factorial = function(num) {
  var sum = 1;
  for (let i = num; i > 1; i--) {
    sum *= i;
  }

  return sum;
	
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
