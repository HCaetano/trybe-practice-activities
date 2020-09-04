const removeFromParameterArray = (originalArray, item) =>
  originalArray.forEach((element, index, array) =>
    element === item ? array.splice(index, 1) : undefined
  );

module.exports = removeFromParameterArray;