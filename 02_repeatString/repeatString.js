const repeatString = function (string, number) {
  let output = "";
  if (number < 0) {
    return "ERROR";
  }
  for (let i = 0; i < number; i++) {
    output = output + string;
  }

  return output;
};

// Do not edit below this line
module.exports = repeatString;
