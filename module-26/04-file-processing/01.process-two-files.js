// Exercício 1 : Utilizando apenas funções síncronas, crie um script que leia dois arquivos e:
// Escreva, no terminal, para cada arquivo, qual foi o tempo necessário para lê-lo do disco;
// Escreva, no terminal, para cada arquivo, seu tamanho em bytes;
// Escreva, no terminal, ao final do processo, qual o tempo total necessário para a execução completa do script

const fs = require('fs');

const firstFileName = '04-file-processing/some-file.txt';
const secondFileName = '04-file-processing/second-file.txt';

function calculateRunTime(startTime) {
  const endTime = Date.now();

  return (endTime - startTime) / 1000;
}

function processFile(fileName) {
  const startTime = Date.now();

  try {
    fs.readFileSync(fileName, { encoding: 'utf8', flag: 'r' });
  } catch (error) {
    console.error(`Error reading file: ${error.path}`);
    console.log(error);
  }

  // const endTime = Date.now();
  const timeDifferenceInSeconds = calculateRunTime(startTime);
  console.log(`Time, in seconds, taken to read '${fileName}': ${timeDifferenceInSeconds}`);
}

const scriptRunTimeStart = Date.now();
processFile(firstFileName);
processFile(secondFileName);
const scriptRunTimeInSeconds = calculateRunTime(scriptRunTimeStart);
console.log(`Total script run time, in seconds: ${scriptRunTimeInSeconds}`);