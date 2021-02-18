
const readMeDataArgs = process.argv.slice(2, process.argv.length);
const [name, github] = readMeDataArgs;
const fs = require('fs');

const generatePage = (name, github) => {
    return `
# projectTitle

## Made by
${name}
https://github.com/${github}
`;
  };

  fs.writeFile('README.md', generatePage(name, github), err => {
    if (err) throw err;
  
    console.log('README complete! Check out README.md to see the output!');
  });