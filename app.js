const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/page-template');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'projectName',
      message: 'What is the name of your project? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('You need to enter a project name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of the project (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('You need to enter a project description!');
          return false;
        }
      }
    },
    {
      type: 'checkbox',
      name: 'languages',
      message: 'What did you this project with? (Check all that apply)',
      choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
    },
    {
      type: 'input',
      name: 'link',
      message: 'Enter the GitHub link to your project. (Required)',
      validate: linkInput => {
        if (linkInput) {
          return true;
        } else {
          console.log('You need to enter a project GitHub link!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'screenshots',
      message: 'Provide screen shots of the project (Required)',
      validate: screenshotsInput => {
        if (screenshotsInput) {
          return true;
        } else {
          console.log('You need to enter project screenshots!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'name',
      message: 'What is your name? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your name!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email? (Required)',
      validate: nameInput => {
        if (nameInput) {
          return true;
        } else {
          console.log('Please enter your email!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username (Required)',
      validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter your GitHub username!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Enter any usage information you may have',
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'Enter the Github Username of any of your contributors',
    },
    {
      type: 'input',
      name: 'testing',
      message: 'Enter any test instructions you may have',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Enter any installation instructions you may have',
    },
  ]);
};

promptUser()
  .then(portfolioData => {
    const pageHTML = generatePage(portfolioData);

    fs.writeFile('./README.md', pageHTML, err => {
      if (err) throw new Error(err);
    });
  });