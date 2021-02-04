// Exercício 3 : Crie um script que, sem utilizar módulos de terceiros:
// DICA : Leia sobre o módulo readline do node .
// Pergunte ao usuário qual arquivo deseja ler.
// Leia o arquivo indicado (Não se esqueça de realizar tratamento de erros caso o usuário informe um arquivo que não existe).
// Escreva na tela o conteúdo do arquivo e a quantidade de bytes.

const readline = require('readline');
const fs = require('fs');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`Type the file's name: `, (fileName) => {
  // console.log(`The file's content is: ${fileName}`);

  const fullFileName = [fileName, '.', 'txt'].join('');
  const data = fs.readFileSync(fullFileName, 'utf8');
  console.log(data);

  rl.close();
});

// try {
  // const data = fs.readFileSync(fileName, 'utf8');
  // console.log(data);
// } catch (error) {
  // console.error(`Error reading file: ${error.path}`);
  // console.log(error);
// }