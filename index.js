const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

const questions = {
  properties: {
    title: {
      message: 'Project title?',
      required: true
    },
    description: {
      message: 'Project desc?',
      required: true
    },
    license: {
      message: 'Project license?',
      required: true,
    }
  }
};

let resultsObj;

function init() {
  prompt.start();
  prompt.get(questions, (error, result) => {
    error && console.error(error);
    resultsObj = result;
    // console.log(resultsObj);
    fs.writeFile('README.md', generateMarkdown(resultsObj), err=>err? console.error(err):console.log(resultsObj))
  });
};

init();

// // TODO: Include packages needed for this application
// const fs = require('fs');
// const prompt = require('prompt');
// const generateMarkdown = require('./utils/generateMarkdown')
// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//   fs.writeFile(fileName, data, (error)=> console.error(error))
// }

// // TODO: Create a function to initialize app
// function init() {

//   writeToFile('README.md', generateMarkdown(data))
// }

// // Function call to initialize app
// init();

// const fs = require('fs');
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// const questions = ['What is your project\'s name?', 'Give your project a description', 'How do we install it?']

// function askQuestion(q){
//   readline.question(q, input => {
//     console.log(input)
//     // readline.close();
//   })
// }

// questions.forEach(question => askQuestion(question))
// const prompt = require('prompt');

// const questions = [{name: 'title'}, {name: 'description'}, {name: 'installation'}];

// prompt.start();

// prompt.get(questions, function (error, result) {
//   if (error) console.log(error);
//   console.log('Input received:');
//   console.log(result);
// });

// const prompt = require('prompt-sync')({sigint: true});

// questions.forEach(q =>{
//   prompt(q);
//   console.log('hello')
// })

// const prompt = require('prompt');

// const questions = ['title', 'description', 'install'];

// const dataObject = {
//   title: '',
//   description: '',
//   install: '',
//   usage: '',
//   contribute: '',
//   testing: '',
//   license: '',
//   github: '',
//   email: '',
// }

// questions.forEach((q, i)=>askQuestion(q, i))

// prompt.start();

// function askQuestion(q, index){

//   prompt.get(q, function (error, result) {
//       if (error) console.log(error);
//       console.log('Input received:');
//       let answer = Object.values(result);
//       console.log(dataObject[0]);
//   });
// }

// const questions = [
//   {
//     name: 'Project name?',
//     q: 'title'
//   },
//   {
//     q: 'description',
//     name: 'Project desc?'
//   },
//   {
//     q: 'installation',
//     name: 'Project install?'
//   },
// ];