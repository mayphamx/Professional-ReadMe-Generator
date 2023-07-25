// packages needed for this application
// const fs = require('fs');
// const inquirer = require('inquirer');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge ='';
  if(license != 'Unlicensed'){
    badge = "![License Badge](https://shields.io/badge/license-" + license + "-green)";
  }
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let licenseLink;
switch(license){
  case 'MIT': licenseLink = 'https://mit-license.org/';
  break;
  case 'Apache': licenseLink ='https://www.apache.org/licenses/LICENSE-2.0.html';
  break;
  case 'BSD': licenseLink = 'https://opensource.org/licenses/BSD-3Clause';
  break;
  case 'Unlicensed': licenseLink = '';
  break;
  default: licenseLink = '';
  break;
}
return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { 
  let LicenseSection ='';

  if(license != 'Unlicensed'){
    LicenseSection += `Link to license: ${renderLicenseLink(license)}`;
  }
  return LicenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
  
  ${renderLicenseBadge(data.license)}\n

  ## Description\n${data.description}\n

  ## Table of Contents\n
  - [Installation](#installation)\n
  - [Usage](#usage)\n
  - [Contributing](#contributing)\n
  - [Tests](#tests)\n
  - [License](#license)\n
  - [Questions](#questions)\n

  ## Installation\n${data.installation}\n

  ## Contributing\n${data.contributionGuidelines}\n

  ## Usage\n${data.usageInfo}\n
  
  ## Tests\n${data.testInstructions}\n

  ## License\n${renderLicenseSection(data.license)}\n

  ## Questions\nPlease visit the following for any questions: [${data.github}](https://github.com/${data.github}) and ${data.email}.
  `;
  }

module.exports = generateMarkdown;
