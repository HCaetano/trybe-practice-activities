let numerical = 54;
let letter;

if (numerical < 0 || numerical > 100) {
  console.log('Invalid value for grade');
} else {
  if (numerical >= 90) {
    letter = 'A';
  } else if (numerical >= 80) {
    letter = 'B';
  } else if (numerical >= 70) {
    letter = 'C';
  } else if (numerical >= 60) {
    letter = 'D';
  } else if (numerical >= 50) {
    letter = 'E';
  } else {
    letter = 'F';
  }

  console.log(`New grade: ${letter}`)
}
