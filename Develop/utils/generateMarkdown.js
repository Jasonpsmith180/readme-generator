// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
    return '';
  }
  switch(license) {
    case 'Apache':
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    case 'BSD':
      return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
    case 'GPL':
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
    case 'IBM':
      return `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`;
    case 'ISC':
      return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`;
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case 'Mozilla':
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
    case 'WTFPL':
      return `[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)`;
  }
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(!license) {
    return '';
  }
  switch(license) {
    case 'Apache':
      return `[Apache](https://opensource.org/licenses/Apache-2.0)`;
    case 'BSD':
      return `[BSD](https://opensource.org/licenses/BSD-3-Clause)`;
    case 'GPL':
      return `[GPL](https://www.gnu.org/licenses/gpl-3.0)`;
    case 'IBM':
      return `[IBM](https://opensource.org/licenses/IPL-1.0)`;
    case 'ISC':
      return `[ISC](https://opensource.org/licenses/ISC)`;
    case 'MIT':
      return `[MIT](https://opensource.org/licenses/MIT)`;
    case 'Mozilla':
      return `[Mozilla](https://opensource.org/licenses/MPL-2.0)`;
    case 'WTFPL':
      return `[WTFPL](http://www.wtfpl.net/about/)`;
  }
} 

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(!license) {
    return '';
  }
  return `
  ## License  
  This application is covered under the ${renderLicenseLink(license)} license.`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}

  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}

  ***
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - [License](#license)
  - [GitHub](#github)
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ***

  ## Contribution Guidelines
  ${data.contribution}

  ## Tests
  ${data.tests}

  ${renderLicenseSection(data.license)}

  ***

  ## GitHub
  Check out my repository and other projects at my [GitHub](https://github.com/${data.github})!

  ## Questions
  For any questions or comments feel free to email me at ${data.email}.

`;
}

module.exports = generateMarkdown;
