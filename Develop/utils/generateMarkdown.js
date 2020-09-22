// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}

    ## Description
    ${data.description}

    ## Installation
    ${data.installation}

    ## Table of Contents
    ${data.contents}

    ## License
    ${data.LicenseList}

    ## Contributors
    ${data.contributing}

    ## Usage
    ${data.usage}

    ## Tests
    ${data.tests}

    ## Questions
    ${data.questions}
  `;
  }
  
  module.exports = generateMarkdown;
  