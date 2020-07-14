let a = 13;
let b = 9;
let c = 12;
let biggestNumber;

if (a > b) {
  biggestNumber = a > c ? a : c;
} else {
  biggestNumber = b > c ? b : c;
}

console.log(`result: ${biggestNumber}`);