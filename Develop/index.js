// array of questions for user
const inquirer = require('inquirer');
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'desc',
            message: 'Enter a description of your project. (Required)',
            validate: descInput => {
                if (descInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project.');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmToc',
            message: 'Would you like to add a Table of Contents?',
            default: true
        },
        {
            type: 'input',
            name: 'toc',
            message: 'Enter a Table of Contents for your project. (Required)',
            when: ({ confirmToc }) => confirmToc
        },
        
    ]);
};

// function to write README file
// function writeToFile(fileName, data) {
// }

// function to initialize program
// function init() {
    
// }

// function call to initialize program
// init();
questions();
