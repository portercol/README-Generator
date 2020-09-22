// function to generate markdown for README
function generateMarkdown(data) {
    return `

# Title
${data.title}

[![License](https://img.shields.io/badge/License-${data.license}-blue.svg)](https://opensource.org/licenses/${data.license})

## Description
${data.description}

## Installation
${data.installation}

## Table of Contents
${data.contents}

## License
${data.license}

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
  