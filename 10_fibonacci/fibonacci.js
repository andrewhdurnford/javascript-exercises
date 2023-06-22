const fibonacci = function (number) {
  let num1 = 0;
  let num2 = 1;
  let nextnum = 1;
  if (number < 0) {
    return "OOPS";
  }
  for (i = 1; i < Number(number); i++) {
    nextnum = num1 + num2;
    num1 = num2;
    num2 = nextnum;
  }
  return nextnum;
};

// Do not edit below this line
module.exports = fibonacci;
