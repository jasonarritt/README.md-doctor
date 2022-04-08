// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  return `

      ${license}

  `;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  return `

      ${license}

  `;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `

      ${license}

  `;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.badge}
  ## Description 
  ${data.description}
  ## Table of contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Licence](#Licence)
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
  (${data.repo})
  ## GitHub
  (${data.github})
  ## Contact
  ${data.contact}

  This README.md was generated using README.md Doctor.
`;
}

module.exports = generateMarkdown;
