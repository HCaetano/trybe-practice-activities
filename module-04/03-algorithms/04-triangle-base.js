const n = 5;
let aux = n;
let display = '';
let iterations = 0;

var whitespaces = 2;
var asterisks = 1;

for (let i = 0; i < n; i += 1) {
  if(aux >= 1) {
    aux -= 2;
    iterations += 1;
  }
}

for (let j = 0; j < iterations; j++) {
  for (let k = 0; k < whitespaces; k++) {
    display += ' ';
  }

  for (let l = 0; l < asterisks; l++) {
    display += '*'
  }

  for (let m = 0; m < whitespaces; m++) {
    display += ' ';
  }

  console.log(display);
  display = '';
  asterisks += 2;
  whitespaces -= 1;
}

// let display = '';
// // for (let i = 0; i < 5; i++) {
//   display += ' '
//   display += ' '
//   display += '*'
//   display += ' '
//   display += ' '
// // }

// console.log(display)
