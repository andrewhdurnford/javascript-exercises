const removeFromArray = function (array, ...args) {
  let remove = "";
  for (j = 0; j < args.length; j++) {
    remove = args[j];
    for (i = 0; i < array.length; i++) {
      if (array[i] === remove) {
        array.splice(i, 1);
      }
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
