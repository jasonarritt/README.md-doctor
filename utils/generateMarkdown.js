// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'None':
      return '';
    case 'MIT':
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'ISC':
      return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
    case 'Apache':
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'GPL':
      return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
    case 'BSD':
      return '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'None':
      return '';
    case 'MIT':
      return '';
    case 'ISC':
      return '';
    case 'Apache':
      return '';
    case 'GNU GPLv3':
      return '';
    case 'BSD':
      return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'None':
      return '';
    case 'MIT':
      return '';
    case 'ISC':
      return '';
    case 'Apache':
      return '';
    case 'GNU GPLv3':
      return '';
    case 'BSD':
      return '';
  }
}


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

// TODO: Create a function to generate markdown for README
const generateMarkdown = data => {
  return `
  # ${data.title}
  ## Badge
  ${data.badge}
  ## Description 
  ${data.description}
  ## Table of contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Contributions](#Contributions)
  - [Testing](#Testing)
  - [Repository Link](#Repository)
  - [GitHub Info](#GitHub) 
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${data.license}
  ## Contributions
  ${data.contributions}
  ## Testing
  ${data.testing}
  ## Repository
  <${data.repo}>
  ## GitHub
  <https://github.com/${data.github}/>
  ## Contact
  ${data.contact}

  This README.md was generated using README.md Doctor.
`;
};

// console.log(generateMarkdown(mockData));

module.exports = generateMarkdown;
