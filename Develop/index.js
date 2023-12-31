// TODO: Include packages needed for this application
// require fs and node inquirer 8.2.4
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
// type = user response type, name = variable where answer is stored, message = question user will see before they answer
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the project title?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'What is the description?',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usageInfo',
    message: 'What is the usage information?',
  },
  {
    // multiple choice response 
    type: 'list',
    name: 'license',
    message: 'What is the license?',
    choices: ['MIT', 'BSD', 'Apache', 'Unlicensed'],
  },
  {
    type: 'input',
    name: 'contributionGuidelines',
    message: 'What are the contribution guidelines?',
  },
  {
    type: 'input',
    name: 'testInstructions',
    message: 'What are the test instructions?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your github username? ',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your e-mail address? ',
  },
];

// TODO: Create a function to write README file
// creates readme.md file when user answers questions and logs error or success message
function writeToFile(fileName, data) {
  fs.writeFile(fileName,generateMarkdown(data),error=> {
    if(error) {
      return console.log('error');
    } else{
      console.log('Your README is ready!');
    }
  });
};

// TODO: Create a function to initialize app
// prompts questions in integrated terminal, saves answers to input in readme
function init() {
  inquirer.prompt(questions)
  .then(function(answers){
    const fileName = 'myREADME.md'
    writeToFile(fileName, answers);
  });
};

// call function
init();
