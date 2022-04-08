// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require ('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [

// Collect project title
// console.log('IMPORTANT! ALL FIELDS ARE REQUIRED.')
{
    type: 'input',
    name: 'title',
    message: 'What is the title of this project?',
    validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('Please enter your project name!');
          return false;
        }
    }
},

// Collect description information
{
    type: 'input',
    name: 'description',
    message: 'What is the description for this project?',
    validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('Please enter your project description!');
          return false;
        }
    }
},

// MAKE SURE TO INCLUDE TABLE OF CONTENTS IN MARKDOWN

// Collect installation information
{
    type: 'input',
    name: 'installation',
    message: 'What is the installation process for this project?',
    validate: installationInput => {
        if (installationInput) {
          return true;
        } else {
          console.log('Please enter the installation process for this project!');
          return false;
        }
    }
},

// Collect usage information
{
    type: 'input',
    name: 'usage',
    message: 'What are the steps for this project to be utilized?',
    validate: usageInput => {
        if (usageInput) {
          return true;
        } else {
          console.log('Please enter the process for utilizing this project!');
          return false;
        }
    }
},

// Collect license information
{
    type: 'input',
    name: 'license',
    message: 'Please enter the license or badge link for this project:',
    validate: licenseInput => {
        if (licenseInput) {
          return true;
        } else {
          console.log('Please enter license or badge for this project!');
          return false;
        }
    }
},

// Collect contribution information
{
    type: 'input',
    name: 'contribute',
    message: 'Please let users know how they can contribute to the project:',
    validate: contributeInput => {
        if (contributeInput) {
          return true;
        } else {
          console.log('Please enter a way for users to contribute to this project!');
          return false;
        }
    }
},

// Collect testing information
{
    type: 'input',
    name: 'testing',
    message: 'Please let users know the testing information for this project:',
    validate: testingInput => {
        if (testingInput) {
          return true;
        } else {
          console.log('Please enter the testing information for this project!');
          return false;
        }
    }
},

// Collect email for questions/contact
{
    type: 'input',
    name: 'contact',
    message: 'Please provide a good contact email for users to share questions and/or comments on this project:',
    validate: contactInput => {
        if (contactInput) {
          return true;
        } else {
          console.log('Please enter a good contact email for this project!');
          return false;
        }
    }
}
];

const promptUser = () => {
    return inquirer.prompt(questions);
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then(function(data){
        console.log(data);
    });
}

// Function call to initialize app
init();
