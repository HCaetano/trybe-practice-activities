// 1
const factorial = (number) => {
  if (number < 0)
    return -1;
  else if (number == 0)
    return 1;
  else {
    return (number * factorial(number - 1));
  }
}

// console.log(factorial(5));

// 2
const longestWord = (sentence) => {
  const words = sentence.split(' ');
  let longestWord = '';

  for (let i = 0; i < words.length; i++) {
    if (words[i].length > longestWord.length) {
      longestWord = words[i];
    }
  }

  return longestWord;
}

// console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu'));

// 4
const replaceLetterWithWord = (word) => {
  const sentence = 'We need some x around here';
  const splitSentence = sentence.split('x');
  
  return `${splitSentence[0]} ${word} ${splitSentence[1]}`;
}

// console.log(replaceLetterWithWord('doctor'));

// 5
const skills = ['HTML', 'CSS', 'JavaScript', 'Git', 'GitHub'];

const createConcatenatedString = (sentenceWhereLetterIsReplaced) => {
  skills.sort();

  return `${skills.toString()}, ${sentenceWhereLetterIsReplaced}`;
}

// console.log(createConcatenatedString(replaceLetterWithWord('doctor')));
