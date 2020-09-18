

var inquirer = require("inquirer");
// array of questions for user
const questions = ([
{
    type: "input",
    name: "title",
    message: "What is the title of your README?"
},
{
    type: "input",
    name: "description",
    message: "What is the description of your project?"
},
{
    type: "input",
    name: "installation",
    message: "What are the installation instructions?"
},
{
    type: "input",
    name: "tableofcontents",
    message: "What are the table of contents?"
},
{
    type: "input",
    name: "license",
    message: "What is the licensure of your project?"
},
{
    type: "input",
    name: "contributing",
    message: "Do you have any contributors on your project?"
},
{
    type: "input",
    name: "usage",
    message: "What is your project used for?"
},
{
    type: "input",
    name: "tests",
    message: "What are the tests for your project?"
},
{
    type: "input",
    name: "questions",
    message: "Are there any questions for your project?"
}
]);

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
