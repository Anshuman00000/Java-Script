//Case-8
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What's your name?"
        }
    ])
    .then((answers) => {
        console.log(`Hello ${answers.name}`);
    });