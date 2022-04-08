// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require ('./utils/generateMarkdown.js');

const mockData = {
    title: 'README.md Doctor',
    description: 'README.md Doctor allows users to easily create a professional README.md file for a given project by answering a series of questions.',
    badge: 'I do not have a badge right now.',
    installation: 'At this time, installation requires a user to clone the README.md-doctor repository to their local machine and using Node to run index.js ("node index.js")',
    usage: 'When README.md Doctor is initialized the user will be prompted with a series of questions to collect information related to the application for which they are generating the README.md file. Upon completing the questionnaire a professional README.md file will be generated. The user can then retrieve this README.md file, edit it as needed and use it for their application.',
    license: 'Currently there is no license in use for README.md Doctor.',
    contributions: 'So far all contributions have been made by myself.',
    testing: 'So far all testing has been conducted on my local machine, on which I am currently writing this',
    repo: 'https://github.com/jasonarritt/README.md-doctor',
    github: 'https://github.com/jasonarritt',
    contact: 'jason.a.arritt@gmail.com'
  };

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

// Collect badge information
{
    type: 'input',
    name: 'badge',
    message: 'Please enter the badge for this project:',
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
    name: 'contributions',
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

// Collect repo information
{
    type: 'input',
    name: 'repo',
    message: 'Please enter the URL for the repository:',
    validate: repoInput => {
        if (repoInput) {
          return true;
        } else {
          console.log('Please enter the repository URL for this project!');
          return false;
        }
    }
},

// Collect GitHub information
{
    type: 'input',
    name: 'github',
    message: 'Please enter your GitHub URL:',
    validate: githubInput => {
        if (githubInput) {
          return true;
        } else {
          console.log('Please enter the URL for your GitHub!');
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
function writeToFile(data) {
    fs.writeFile('./dist/README.md', data, err => {
        if (err) {
            console.log(err);
            return;
        // when the README has been created 
        } else {
            console.log("Your README.md file has been successfully created! It can be retrieved from the dist folder.")
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    promptUser()
    .then(function(data) {
        return generateMarkdown(data);
    })
    .then(function(data) {
    writeToFile(data)
    })
    .catch(err => {
        console.log(err);
    });

}


// Function call to initialize app
init();
