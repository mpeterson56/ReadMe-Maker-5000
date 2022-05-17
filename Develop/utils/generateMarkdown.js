
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {           






}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

  const generateLicenseLink = licenseLink => {
    if (!licenseLink) {
      return '';
    }
  
    return `
     
       [License link] (${licenseLink})
      
    `;
  };





// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

  const generateLicense = license => {
    if(!license){return ``;}
    return `
   ## License
     

        license- ${license}
       license link- ${licenseLink}
       
      `;
     
    

      
  };


  


// TODO: Create a function to generate markdown for README

module.exports = generateMarkdown => {


const {title, Description, installation, Usage, credits, licenseLink, license, tests,link, email }=generateMarkdown;
  return `# ${title}

## Description
${Description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
${installation}

## Usage
${Usage}

## Credits
${credits}

${generateLicenseLink(licenseLink)}
${generateLicense(license)}

## Tests
${tests}

## Questions
[github link](${link})
${email}
`;
};


