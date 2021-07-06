const fs = require('fs');

function readFilePromise(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, (error, content) => {
      if (error) return reject(error);
      resolve(content);
    });
  });
}

Promise.all([
  readFilePromise('some-file.txt'),
  readFilePromise('second-file.txt'),
  readFilePromise('node-written-file.txt')
])
  .then(([file1, file2, file3]) => {
    const fileSizeSum = file1.byteLength + file2.byteLength + file3.byteLength;
    console.log(`First file content: ${file1}`);
    console.log(`Second file content: ${file2}`);
    console.log(`Third file content: ${file3}`);
    console.log(`Three files read, consisting of ${fileSizeSum} bytes`);
  })
  .catch((error) => {
    console.error(`Error reading files: ${error.message}`);
  })

// first version
// const fs = require('fs');

// const text = 'Texto teste 2';

// async function writingFiles() {
//   await fs.writeFile('./meu-arquivo.txt', text, (err) => {
//     if (err) return console.log(err);
//     console.log(text);
//   })
// }

// writingFiles();