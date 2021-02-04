const value1 = 1;
const value2 = 2;
const value3 = 3;

function numberHandler(value1, value2, value3) {
  const promise = new Promise((resolve, reject) => {
    [value1, value2, value3].forEach(value => {
      if (typeof value !== 'number') {
        reject('Please, insert numbers only');
        exit(1);
      }
    });

    const processedValue = ((value1 + value2) * value3);

    if (processedValue < 50) {
      reject('Value is too small');
    } else {
      resolve(processedValue)
    }
  })

  return promise;
}

numberHandler(value1, value2, value3)
  .then(result => console.log(result))
  .catch(error => console.log(error));