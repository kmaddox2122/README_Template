// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

//rethink logic of badge returns
function renderLicenseBadge(license) {
  if (renderLicenseBadge === true) {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (renderLicenseLink === true) {
  switch (renderLicenseLink) {
    case 'renderLicenseLink':
      response = "https://img.shields.io/badge/License-MIT-yellow.svg";
      break;
    default:
      response = "";
      break;
  }
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (renderLicenseSection === true) {
    return `## ${License}`
  } else {
    return ''
  }
}

// TODO: Create a function to generate markdown for README
// const generateMd = ({projectTitle, description,...}) =>

function generateMarkdown(data) {
 console.log(data) 
 return `# ${data.projectTitle}, 
  ## ${data.description};, 
  
`;
}
//copy rest of "readme_temp" into return of function 

module.exports = generateMarkdown;

 