const { writeFile} = require('./utils/generateMarkdown.js');
const generatePage = require('./src/page-template.js');
const inquirer = require('inquirer');
// array of questions for user
const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address? (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username? (Required)',
            validate: usernameInput => {
                if (usernameInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username.');
                    return false;
                }
            }
        },
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
            type: 'input',
            name: 'install',
            message: 'Enter the installation instructions for your project. (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter installation instructions for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information for your project. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter usage information for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Enter contribution guidelines for your project. (Required)',
            validate: contributeInput => {
                if (contributeInput) {
                    return true;
                } else {
                    console.log('Please enter contribution guidelines for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Enter test instructions for your project. (Required)',
            validate: testsInput => {
                if (testsInput) {
                    return true;
                } else {
                    console.log('Please enter test instructions for your project.');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license should be included in your project (Required)',
            choices: ['MIT', 'APACHE2.0', 'GPL3.0', 'BSD3', 'None']
        },
    ]);
};
// Promise that takes answers to the questions and calls functions to generate the README file
questions()
    .then(readmeData => {
        return generatePage(readmeData);
    })
    .then(pageMD => {
        return writeFile(pageMD);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });
