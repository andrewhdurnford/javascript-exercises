const reverseString = function (string) {
  array = [...string];
  let output = "";
  for (let i = string.length - 1; i >= 0; i--) {
    output = output + array[i];
  }
  return output;
};

// Do not edit below this line
module.exports = reverseString;
