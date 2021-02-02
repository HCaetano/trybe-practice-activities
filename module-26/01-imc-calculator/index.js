const readline = require('readline-sync');
const { checkIMC } = require('./checkIMC');

const weight = readline.questionFloat('Type your weight: ');
const height = readline.questionFloat('Type your height: ');
const imc = (weight / (height * height)).toFixed(2);

checkIMC(imc);
