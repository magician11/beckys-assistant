const fs = require('fs');
const escapeRegexp = require('escape-string-regexp');

const globalReplace = (text, changeFrom, changeTo) => {
  let numberOfChanges = 0;
  const updatedText = text.replace(
    new RegExp(escapeRegexp(changeFrom), 'g'),
    () => {
      numberOfChanges++;
      return changeTo;
    }
  );
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
  text = globalReplace(text, 'And~', 'In addition, ');
  text = globalReplace(text, 'Besides,', 'In addition,');
  text = globalReplace(text, "What's more,", 'Furthermore,');
  text = globalReplace(text, 'Furthermore ', 'Furthermore,');
  text = globalReplace(text, 'Yet,', 'However,');
  text = globalReplace(text, 'But,', 'However,');
  text = globalReplace(text, 'But ', 'However,');
  text = globalReplace(text, 'But~', 'However,');
  text = globalReplace(text, '1-dimensional', 'one-dimensional,');
  text = globalReplace(text, '2-dimensional', 'two-dimensional,');
  text = globalReplace(text, '3-dimensional', 'three-dimensional,');
  text = globalReplace(text, 'Riemann-Liouville', 'Riemann--Liouville,');
  text = globalReplace(text, '3-D', '3D,');
  text = globalReplace(text, '2-D', '2D,');
  text = globalReplace(text, '1-D', '1D,');
  text = globalReplace(text, 'allow to', 'allow for');
  text = globalReplace(text, 'decision making', 'decision-making');
  text = globalReplace(text, 'So ', 'Thus,');
  text = globalReplace(text, ' etc.', ', etc.');
  text = globalReplace(text, ' i.e. ', ' i.e., ');
  text = globalReplace(text, ' e.g. ', ' e.g., ');
  text = globalReplace(text, '\textit{a priori}', 'a priori,');
  text = globalReplace(text, '\textit{a posteriori}', 'a posteriori,');
  text = globalReplace(text, '\textit{a-posteriori}', 'a posteriori,');
  text = globalReplace(text, '\textit{a-priori}', 'a priori,');
  text = globalReplace(text, 'Also,', 'In addition,');
  text = globalReplace(text, 'Here ', 'Here, ');
  text = globalReplace(text, 'Therefore', 'Therefore,');
  text = globalReplace(text, 'Then', 'Then,');
  text = globalReplace(text, 'First ', 'First,');
  text = globalReplace(text, 'Thus', 'Thus,');
  text = globalReplace(text, ', that', ' that');
  text = globalReplace(text, ', because', ' because,');
  text = globalReplace(text, 'Further,', 'Furthermore,');
  text = globalReplace(text, 'Next', 'Next,');
  text = globalReplace(text, 'At last,', 'Finally,');
  text = globalReplace(text, "0's", '0s');
  text = globalReplace(text, 'non-linear', 'nonlinear,');
  text = globalReplace(text, 'in regards to', 'in regard to');
  text = globalReplace(text, 'associated to', 'associated with');
  text = globalReplace(text, 'in term of', 'in terms of');
  text = globalReplace(text, 'in the Figure', 'in Figure');
  text = globalReplace(text, 'in the Equation', 'in Equation');
  text = globalReplace(text, 'in the Table', 'in Table');
  text = globalReplace(text, ', therefore, ', '; therefore, ');
  text = globalReplace(text, 'on-line', 'online');
  text = globalReplace(text, 'x-axis', '$x$-axis');
  text = globalReplace(text, 'y-axis', '$y$-axis');
  text = globalReplace(text, 'z-axis', '$z$-axis');
  text = globalReplace(text, 'off-line', 'offline');
  text = globalReplace(text, 'dependant', 'dependent');
  text = globalReplace(text, 'Last,', 'Finally,');
  text = globalReplace(text, ',,', ',');

  // if this is not a title, and the first letter of every word in this sentence is capitalised,
  // then lowercase everything but the first letter of the sentence.

  // save the file
  // console.log(text); // we are going printing out instead of saving result
  fs.writeFileSync(filename, text);
  console.log('All done!');
}
