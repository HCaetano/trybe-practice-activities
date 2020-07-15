let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

console.log('** 1 **');
// 1 - print all numbers inside the array 
for (let i = 0; i < numbers.length; i += 1) {
  console.log(numbers[i]);
}

console.log('** 2 **');
// 2 - print sum of all numbers
let sum = 0;

for (let i = 0; i < numbers.length; i += 1) {
  sum += numbers[i];
}

console.log(sum);

console.log('** 3 **');
// 3 - print the average of all numbers 
let average = 0;

for (let i = 0; i < numbers.length; i += 1) {
  average += numbers[i];
}

average = average / numbers.length;
console.log(average);

console.log('** 4 **');
// 4 - use the same code of previous exercise, but now print 'bigger than 20' or 'less than or equal to 20' dependending to the average
average = 0;

for (let i = 0; i < numbers.length; i += 1) {
  average += numbers[i];
}

average = average / numbers.length;
console.log(average > 20 ? 'value bigger than 20' : 'value less than or equal to 20');

console.log('** 5 **');
// 5 - find the biggest value in the array and print it
let max = Number.MIN_VALUE;

for (let i = 0; i < numbers.length; i += 1) {
  if(max < numbers[i]) {
    max = numbers[i];
  }
}

console.log(max);

console.log('** 6 **');
// 6 - find and print the quantity of odd numbers in the array
let oddNumbers = 0;

for (let i = 0; i < numbers.length; i += 1) {
  if(numbers[i] % 2 !== 0) {
    oddNumbers += 1;
  }
}

console.log(oddNumbers);

console.log('** 7 **');
// 7 - find the smallest value in the array and print it
let min = Number.MAX_VALUE;

for (let i = 0; i < numbers.length; i += 1) {
  if(min > numbers[i]) {
    min = numbers[i];
  }
}

console.log(min);