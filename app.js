const inquirer = require('inquirer');
const fs = require('fs');
const generatePage = require('./src/page-template');

const promptUser = () => {
    console.log(`
  =================
  Add a New Project
  =================
  `);
    return inquirer.prompt([
        {
            type: 'input',
            name: 'user-name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'github-name',
            message: 'What is your gitHub username?'
        },
        {
            type: 'input',
            name: 'project-title',
            message: 'What is the name of your project?'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Provide a description of the project (Required)'
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the GitHub link to your project. (Required)'
        },
        {
            type: 'input',
            name: 'screen-shots',
            message: 'Do you have screen-shots of your project?'
          },

    ]);
};

promptUser().then(answers => console.log(answers));