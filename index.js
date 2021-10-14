const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = [
  {
    name: 'title',
    type: 'input',
    message: 'Project title?',
    required: true,
  },
  {
    name: 'description',
    type: 'input',
    message: 'Project\'s description?',
    required: true,
  },
  {
    name: 'install',
    type: 'input',
    message: 'How do we install your software?',
    required: true,
  },
  {
    name: 'usage',
    type: 'input',
    message: 'How do we use your software?',
    required: true,
  },
  {
    name: 'contributions',
    type: 'input',
    message: 'What are the guidelines for contribution to this project?',
    required: true,
  },
  {
    name: 'testing',
    type: 'input',
    message: 'Give some testing instructions for your software.',
    required: true,
  },
  {
    name: 'license',
    type: 'list',
    choices: ['NO LICENSE'],
    message: 'which license do you want to use?',
    required: true,
  },
  {
    name: 'username',
    type: 'input',
    message: 'Enter your GitHub username.',
    required: true,
  },
  {
    name: 'email',
    type: 'input',
    message: 'Enter your email.',
    required: true,
  },
];

// Grab list of licenses from GitHub's API
function init() {
  generateMarkdown.getLicenses(licenses =>{
    // Set the options
    licenses.forEach(obj => questions[6].choices.push(obj.name));
    inquirer
      .prompt(questions)
      .then(response=>{
        let data = response;
        fs.writeFile(`./Generated/${data.title}.md`, generateMarkdown.generateMarkdown(data), err=>err?console.error(err):console.log('success'));
      })
  })
}

init()