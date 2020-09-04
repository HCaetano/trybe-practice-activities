// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function isVowel(characterParameter) {
  const character = characterParameter.toLowerCase();

  switch (character) {
    case 'a':
      return true;
    case 'e':
      return true;
    case 'i':
      return true;
    case 'o':
      return true;
    case 'u':
      return true;
      break;
    default:
      return false;
  }
}

function vowels(string) {
  const characters = string.split('');
  const extractedVowels = characters.filter(character => isVowel(character));

  return extractedVowels.length;
}

module.exports = vowels;