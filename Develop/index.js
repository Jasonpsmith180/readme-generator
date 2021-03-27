// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptProject = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: projectTitleInput => {
                if (projectTitleInput) {
                    return true;
                } else {
                    console.log('Please enter the title of your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a description of your project. (Required)',
            validate: projectDescriptionInput => {
                if (projectDescriptionInput) {
                    return true;
                } else {
                    console.log('Please enter a description for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please enter the installation instructions for your project. (Required)',
            validate: projectInstallationInstructions => {
                if (projectInstallationInstructions) {
                    return true;
                } else {
                    console.log('Please enter installation instructions for your project');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter usage information for your project. (Required)',
            validate: projectUsageInfo => {
                if (projectUsageInfo) {
                    return true;
                } else {
                    console.log('Please enter usage information for your project.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please enter contribution guidelines for your project. (Optional)'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please enter tests for your project and how to run them. (Optional)'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose a license for your project. (Required)',
            choices: ['Apache', 'Academic', 'BSD', 'GNU', 'GPL', 'ISC', 'MIT', 'Mozilla', 'Other'],
            validate: projectLicense => {
                if (projectLicense) {
                    return true;
                } else {
                    console.log('Please choose a license for your project.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub username. (Required)',
            validate: username => {
                if (username) {
                    return true;
                } else {
                    console.log('Please enter your github username.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address. (Required)',
            validate: emailAddress => {
                if (emailAddress) {
                    return true;
                } else {
                    console.log('Please enter your email address.');
                    return false;
                }
            }
        }
    ])
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', data, err => {
            // if there is an error, reject the promise and send the error to the catch method
            if (err) {
                reject(err);
                // return out of the function so the promise doesnt accidentally execute the resolve
                return;
            }

            // if everything worked resolve the promise and send the successful data to the .then method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
}

// TODO: Create a function to initialize app
function init() {
    promptProject()
    .then(answers => {
        console.log(answers);
        return generateMarkdown(answers);
    })
    .then(pageMarkDown => {
        console.log(pageMarkDown);
        return writeToFile('README.md', pageMarkDown);
    })
    .catch(err => {
        console.log(err);
    });
}

// Function call to initialize app
init();
