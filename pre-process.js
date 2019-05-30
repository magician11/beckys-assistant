const fs = require('fs');

if (process.argv.length < 3) {
  console.log('usage: node pre-process.js [name of file to process]');
} else {
  // open the file
  const filename = process.argv[2];
  let text = fs.readFileSync(filename, 'utf8');

  // process the file
  text = text.replace(/So,/g, 'Thus,');
  text = text.replace(/And /g, 'In addition, ');

  // save the file
  fs.writeFileSync(filename, text);
  console.log('All done!');
}
