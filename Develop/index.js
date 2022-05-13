// TODO: Include packages needed for this application

const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

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
        type: 'input',
        name: 'Usage',
        message: 'Enter how to use this application (Required)',
        validate: usageInput => {
          if (usageInput) {
            return true;
          } else {
            console.log('Please enter how to use your app!');
            return false;
          }
        }
      },

      {
        type: 'input',
        name: 'installation',
        message: 'Provide step-by-step installation guide: ',
        validate: installationInput => {
          if (installationInput) {
            return true;
          } else {
            console.log('Please enter installation info!');
            return false;
          }}
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
        type: 'checkbox',
        name: 'license',
        message: 'What license is associated with this project? (Check all that apply)',
        choices: ['Apache licence 2.0', 'GNU GPLv3 ', ' ISC', 'MIT', 'Mozilla Public License 2.0', 'Boost Software License 1.0', 'The Unlicense']
      },
      {
        type: 'input',
        name: 'tests',
        message: 'how do you run tests for this project? ',
        validate: testsInput => {
          if (testsInput) {
            return true;
          } else {
            console.log('Please enter Testing info!');
            return false;
          }}
      },


 ])

};

const promptQuestions = QuestionsData => {
if (!QuestionsData.questions){
  QuestionsData.questions = [];
}
return inquirer
.prompt([
  {
    type: 'input',
    name: 'link',
    message: 'What is your github link? (Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('You need to enter a github link!');
        return false;
      }
    }
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email? (Required)',
    validate: githubInput => {
      if (githubInput) {
        return true;
      } else {
        console.log('You need to enter your email');
        return false;
      }
    }
  },




]);
};

// TODO: Create a function to write README file
function writeToFile(generateMarkdown, ReadMeData) {

    const pageMD = writeToFile(ReadMeData);
    fs.writeFile('./readMe.md', pageMD, err => {
      if (err) throw new Error(err);
      console.log('Page created! Check out readMe.md in this directory to see it!');
    });
    
}






// TODO: Create a function to initialize app
function init() {
questions().then(promptQuestions)




}





    

// Function call to initialize app
init();
