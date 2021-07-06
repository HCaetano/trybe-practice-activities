const fs = require('fs');

const fileName = 'second-file.txt';

fs.readFile(fileName, 'utf8', (error, data) => {
  if (error) {
    console.error(`Could not read the file ${fileName}\n Error: ${error}`);
    process.exit(1);
  }
  console.log(`File content: ${data}`);
});