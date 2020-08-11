// 1
const princess = {
  firstName: 'Ashe',
  age: 22,
  job: 'Princess',
};

const addNewPropsToObject = (object, propName, propValue) => {
  return object[propName] = propValue;
}

addNewPropsToObject(princess, 'lastName', 'Dalmasca');
// console.log(princess);
