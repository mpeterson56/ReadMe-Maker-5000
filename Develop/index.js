// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'Title',
        message: 'What is the project title? (Required)',
        validate: titleInput => {
          if (titleInput) {
            return true;
          } else {
            console.log('Please enter your project title!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'Description',
        message: 'Enter a description explaining the what why and how of the project (Required)',
        validate: descriptionInput => {
          if (descriptionInput) {
            return true;
          } else {
            console.log('Please enter a description of your project!');
            return false;
          }
        }
      },
      {
        type: 'confirm',
        name: 'confirmInstallation',
        message: 'Would you like to enter installation instructions?',
        default: true
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide step-by-step installation guide: ',
        when: ({ confirmInstallation }) => confirmInstallation
      },
      {
        type: 'confirm',
        name: 'confirmCredits',
        message: 'Were there any collaborators, third-party assets or tutorials to credit?',
        default: true
      },
      {
        type: 'input',
        name: 'credits',
        message: 'Please name collaborators, third party assets or tutorials to credit ',
        when: ({ confirmCredits }) => confirmCredits
      },
      {
        type: 'input',
        name: 'license',
        message: 'please enter the License for this project (Required)',
        validate: licenseInput => {
          if (licenseInput) {
            return true;
          } else {
            console.log('Please enter a License!');
            return false;
          }
        }
      },



 ]);
};
questions();

// TODO: Create a function to write README file
//function writeToFile(fileName, data) {}






// TODO: Create a function to initialize app
//function init() {}





    

// Function call to initialize app
//init();
