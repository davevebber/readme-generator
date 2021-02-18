const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');

const promptUser = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      }
    ]);
  };
  
  promptUser().then(answers => console.log(answers));