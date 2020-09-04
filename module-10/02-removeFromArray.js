const removeFromArray = (parameterArray, item) => {
  return parameterArray.filter(element => element !== item);
}

module.exports = removeFromArray;