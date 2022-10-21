// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//rethink logic of badge returns
function renderLicenseBadge(license) {
  if (license === 'MIT License') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link 
function renderLicenseLink(license) {
  let response = ''
  switch (license) {
    case 'MIT License':
      response = '- [License](#license)'
      break;
    default:
      response = "";
      break;
  }
  return response;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'MIT License') {
    return `## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
<p>The license being used is the ${license}</p>`
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 console.log(data) 
 return `# ${data.projectTitle} 
${renderLicenseBadge(data.license)}
## Description 
${data.description}
- ${data.motivation}
- ${data.solvedProblem}
- ${data.learned}
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
${renderLicenseLink(data.license)}
- [Tests](#tests)
- [Questions](#questions)
## Installation
${data.installationSteps}
## Usage
${data.usageInstructions}
## Contributing
${data.contributing}
${renderLicenseSection(data.license)}

## Tests
${data.test}
## Questions
If you have any additional questions, please reach out to me using the following:
<p>Github Username: ${data.username}</p>
<p>Email: ${data.email}</p>
`;
}
module.exports = generateMarkdown;

 