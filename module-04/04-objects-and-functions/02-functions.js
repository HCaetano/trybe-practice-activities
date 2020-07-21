console.log('\n*** 1 ***');
let wordToBeChecked1 = 'arara';
let wordToBeChecked2 = 'desenvolvimento';

function verifyPalindrome(palindrome) {
  let reversed = '';

  for (let i = palindrome.length - 1; i >= 0; i--) {
    reversed += palindrome[i];
  }

  if (palindrome === reversed) {
    return true;
  }

  return false;
}

console.log(verifyPalindrome(wordToBeChecked2));

console.log('\n*** 2 ***');
let numbers = [2, 3, 6, 7, 10, 1];

function findBiggestNumberPosition(numbers) {
  let max = Number.MIN_VALUE;
  let index;

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] > max) {
      max = numbers[i];
      index = i;
    }
  }

  return index;
}

console.log(findBiggestNumberPosition(numbers));

console.log('\n*** 3 ***');
numbers = [2, 4, 6, 7, 10, 0, -3];

function findSmallestNumberPosition(numbers) {
  let min = Number.MAX_VALUE;
  let index;

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < min) {
      min = numbers[i];
      index = i;
    }
  }

  return index;
}

console.log(findSmallestNumberPosition(numbers));

console.log('\n*** 4 ***');
const names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function findLongestName(names) {
  let longestName;
  let nameLengthCounter = 0;

  for (let i = 0; i < names.length; i += 1) {
    if (names[i].length > nameLengthCounter) {
      longestName = names[i];
      nameLengthCounter = names[i].length;
    }
  }

  return longestName;
}

console.log(findLongestName(names));

console.log('\n*** 5 ***');
numbers = [2, 3, 2, 5, 8, 2, 3, 3, 3, 2, 2, 2, 2, 2, 2, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9];

function mostFrequentNumber(numbers) {
  let appearances = 0;
  let maxAppearances = 0;
  let mostFrequentNumber;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (numbers[i] === numbers[j]) {
        appearances += 1;
      }
    }

    if (appearances > maxAppearances) {
      maxAppearances = appearances;
      mostFrequentNumber = numbers[i];
    }
  }

  return mostFrequentNumber;
}

console.log(mostFrequentNumber(numbers))

console.log('\n*** 6 ***');
const n = 5;

function sumUpUntilN(n) {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum += i;
  }

  return sum;
}

console.log(sumUpUntilN(n));

console.log('\n*** 7 ***');
const word = 'trybe';
const ending = 'be';
let isItTheSame = false;
let endingIndex = 0;

function checkWordEnding(word, ending) {
  for (let i = word.length - ending.length; i < word.length; i += 1) {
    if (word[i] === ending[endingIndex]) {
      isItTheSame = true;
    } else {
      isItTheSame = false;
      break;
    }

    endingIndex += 1;
  }

  return isItTheSame;
}

console.log(checkWordEnding(word, ending));
