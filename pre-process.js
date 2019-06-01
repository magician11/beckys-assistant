const fs = require('fs');

const globalReplace = (text, changeFrom, changeTo) => {
  let numberOfChanges = 0;
  const updatedText = text.replace(new RegExp(changeFrom, 'g'), () => {
    numberOfChanges++;
    return changeTo;
  });
  console.log(
    `Replaced "${changeFrom}" to "${changeTo}": ${numberOfChanges} ${
      numberOfChanges === 1 ? 'time' : 'times'
    }`
  );
  return updatedText;
};

if (process.argv.length < 3) {
  console.log('usage: node pre-process.js [name of file to process]');
} else {
  // open the file
  const filename = process.argv[2];
  let text = fs.readFileSync(filename, 'utf8');

  // process the file
  text = globalReplace(text, 'So,', 'Thus,');
  text = globalReplace(text, 'And ', 'In addition, ');
  text = globalReplace(text, 'Besides,', 'In addition,');
  text = globalReplace(text, "What's more,", 'Furthermore,');
  text = globalReplace(text, 'Yet,', 'However,');
  text = globalReplace(text, 'So ', 'Thus,');
  text = globalReplace(text, 'Then', 'Then,');
  text = globalReplace(text, 'Further,', 'Furthermore,');
  text = globalReplace(text, 'So,', 'Thus,');
  text = globalReplace(text, 'Next', 'Next,');
  text = globalReplace(text, 'At last', 'Finally,');
  text = globalReplace(text, "0's", '0s');
  text = globalReplace(text, 'At last', 'Finally,');
  text = globalReplace(text, 'non-linear', 'nonlinear,');
  text = globalReplace(text, 'on-line', 'online');
  text = globalReplace(text, 'off-line', 'offline');
  text = globalReplace(text, 'Last', 'Finally,');
  text = globalReplace(text, ',,', ',');

  // if this is not a title, and the first letter of every word in this sentence is capitalised,
  // then lowercase everything but the first letter of the sentence.

  // save the file
  // console.log(text); // we are going printing out instead of saving result
  // fs.writeFileSync(filename, text);
  console.log('All done!');
}
