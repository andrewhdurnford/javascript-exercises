const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (args) {
  let sum = 0;
  args.forEach((num) => {
    sum += num;
  });
  return sum;
};

const multiply = function (...args) {
  let product = 1;
  for (i = 0; i < args.length; i++) {
    product = product * args[i];
  }
  return product;
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (number) {
  let factorial = 1;
  for (i = number; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
