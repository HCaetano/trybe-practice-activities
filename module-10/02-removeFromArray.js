const removeFromArray = (parameterArray, item) => {
  // let resultArray = [];

  return parameterArray.filter(element => element !== item);

  // for (let i = 0; i < parameterArray.length; i += 1) {
  //   if (item !== parameterArray[i]) {
  //     resultArray.push(parameterArray[i]);
  //   }
  // }
  // return resultArray;
}

module.exports = removeFromArray;