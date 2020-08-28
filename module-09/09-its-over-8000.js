const fetchPromise = () => {
  const promise = new Promise((resolve, reject) => {
    const array1to50 = [];

    for (let index = 0; index < 10; index += 1) {
      const randomNumber = Math.random() * 51;
      const numberToThePowerOfTwo = Math.pow(randomNumber, 2);
      array1to50.push(numberToThePowerOfTwo)
    }

    const sum = array1to50.reduce((accumulator, current) => accumulator + current, 0);

    if (sum > 8000) {
      reject();
    }

    resolve(sum);
  })

  promise
    .then(sum => [2, 3, 5, 10].map(number => sum / number))
    .then(array => array.reduce((sum, accumulator) => sum + accumulator, 0))
    .catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));
};

fetchPromise();