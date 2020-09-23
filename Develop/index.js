var inquirer = require("inquirer");
const util = require("./utils/generateMarkdown");
const fs = require("fs");

// using inquirer, create an array of questions for user
const questions = inquirer.prompt([
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
        name: "contents",
        message: "What are the table of contents?"
    },
    {
        type: "list",
        name: "license",
        message: "Which license would you like to use?",
        choices: [
            'Apache',
            'GNU',
            'MIT',
        ]
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

])

    // promise is here
    .then(function (response) {

        // store util (generate markdown) in a variable to call later
        var answers = util(response)

        // calling function writeReadme and passing through the generate markdown answers)
        writeReadme(answers)
    });


// function to write README file

function writeReadme(answers) {
    fs.writeFile('READMEGen.md', answers, (err) => {
        // if there are any errors in writing to the file, return below
        if (err) {
            console.error(err)
            return
        }
    });
}
// function to initialize program
// function init() {
// };

// function call to initialize program
// init();
