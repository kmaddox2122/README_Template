// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
      type: 'input',
      name: 'projectTitle',
      message: 'What is your project title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please write a brief description of your project.',
    },
    {
      type: 'input',
      name: 'motivation',
      message: 'What was your motivation to create this project?',
    },
    {
      type: 'input',
      name: 'solvedProblem',
      message: 'What problem does this project solve?',
    },
    {
      type: 'input',
      name: 'learned',
      message: 'What did you learn?',
    },
    {
      type: 'input',
      name: 'usageInstructions',
      message: 'Provide instructions and examples for use.',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List any collaborators, third-party assets, or tutorials.',
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please list your test instructions.',
    },
    {
        type: 'input',
        name: 'username',
        message: 'Enter your GitHub username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email.',
    },
  ];

// have prompt inside init to make more modular
// TODO: Create a function to initialize app
function init() {
    inquirer
  .prompt(questions)
    
  .then((answers) => {
    const mdPageContent = generateMarkdown(answers);

    // TODO: Create a function to write README file
    // function writeToFile(fileName, data) {}
    fs.writeFile('README_temp_completed.md', mdPageContent, (err) =>
      err ? console.log(err) : console.log('Successfully created README_temp_completed!')
    );
  });
}

// Function call to initialize app
init();
