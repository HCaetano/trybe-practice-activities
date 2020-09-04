// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(number) {
  if (number === 0) {
    return 0;
  }

  const stingifiedNumber = number.toString();
  let isNegative = false;

  if (stingifiedNumber.charAt(0) === '-') {
    isNegative = true;
  }

  const numberToArray = stingifiedNumber.split('');
  const reversedArray = numberToArray.filter(number => number !== 0);
  const reversedNumber = parseInt(reversedArray.reverse().toString().replace(/,/g, ''));

  if (isNegative) {
    return - reversedNumber;
  }

  return reversedNumber;
}

module.exports = reverseInt;