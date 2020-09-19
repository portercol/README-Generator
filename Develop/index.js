var inquirer = require("inquirer");

// array of questions for user

inquirer
.prompt([
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
    name: "licenseList",
    message: "Which license would you like to use?",
    choices: [
        'Apache License 2.0',
        'BSD 3-Clause (New or Revised) license',
        'BSD 2-Clause (Simplified or FreeBSD) license',
        'GNU (General Public License GPL)',
        'GNU Library or (Lesser General Public License LGPL)',
        'MIT license',
        'Mozilla Public License 2.0',
        'Common Development and Distribution License',
        'Eclipse Public License version 2.0'
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

.then(function(response){
    console.log(response)
});
// function to write README file
// function writeToFile(fileName, data) {
//     console.log(fileName, data);
//     fs.writeFile(fileName, (data), function(err){
//         if (err) {
//             throw err;
//         };
//     });
// };

// function to initialize program
//function init() {

//}

// function call to initialize program
//init();
