// imports inquirer and shapes file
const inquirer = require('inquirer');
const shapes = require('./lib/shapes');

// returns the list of question inputs for one logo
const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter up to three characters:',
    // checks to see if there are 3 or less characters
    validate: function(value) {
      if (value.length > 3) {
        return 'Please enter up to three characters.';
      } else {
        return true;
      }
    }
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'What color should the text be?:'
  },
  {
    type: 'list',
    name: 'shape',
    message: 'What shape would you like?:',
    choices: ['circle', 'triangle', 'square']
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'What color should the shape be?:'
  }
];


inquirer.prompt(questions).then(answers => {
    const {text, textColor, shape, shapeColor} = answers;
    const svg = shapes[shape](text, textColor, shapeColor);
    const fs = require('fs');
    // creates the logo and stores it in the examples directory
    fs.writeFile('examples/logo.svg', svg, function(err) {
      if (err) throw err;
      console.log('The logo has been created and stored in the examples directory!');
    });
  });
