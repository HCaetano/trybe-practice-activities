const fizzBuzz = (number) => {
  if (typeof number !== 'number') return false;
  if (number % 3 === 0 && number % 5 === 0) return 'fizzbuzz';
  if (number % 3 === 0) return 'fizz';
  if (number % 5 === 0) return 'buzz';
  return number;
}

module.exports = fizzBuzz;