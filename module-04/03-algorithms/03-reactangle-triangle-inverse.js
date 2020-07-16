const n = 5;
let display = '';
let whitespaces = n - 1;
let asterisks = 1;

for (let i = 0; i < n; i += 1) {
  for (let j = 0; j < whitespaces; j++) {
    display += ' '
  }

  for (let k = 0; k < asterisks; k++) {
    display += '*';
  }

  console.log(display);
  display = '';
  whitespaces -= 1;
  asterisks += 1;
}