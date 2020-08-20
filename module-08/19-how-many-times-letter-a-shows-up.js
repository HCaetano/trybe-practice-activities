    
const assert = require('assert');

const names = [
  'Aanemarie',  'Adervandes',   'Akifusa',
  'Abegildo',   'Adicellia',    'Aladonata',
  'Abeladerco', 'Adieidy',  'Alarucha',
];

function containsA() {
  return names
    .reduce((accumulator, current) => accumulator + current.toUpperCase().match(/A/g).length, 0);
}

// Solution for counting a certain character in a string found at: https://www.geeksforgeeks.org/how-to-count-string-occurrence-in-string-using-javascript/

assert.strictEqual(containsA(), 20);