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