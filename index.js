
// Imported programs required for this application
const fs = require('fs-extra');
const inquirer = require('inquirer');
const buildSVG = require('./public/scripts/svg-builder.js');

// Function that takes user input and generates a logo
async function generateLogo() {
	try {
		const logoParams = await inquirer.prompt([
			{
				type: 'input',
				name: 'logo',
				message:
					'Enter the characters used in your logo (limit of 3 characters)',
				validate: (input) => input.length <= 3,
			},

			{
				type: 'list',
				name: 'shape',
				message: 'Choose the shape you would like to use',
				choices: ['Triangle', 'Circle', 'Square'],
			},

      {
        type: 'list',
        name: 'colorChoice',
        message: 'Pick the color you want the shape to be',
        choices: [ 
				'Black',
				'Dark Red',
				'Navy',
				'Olive',
				'Indigo',
				'Saddle Brown',
				'Hot Pink',
			],
				// Converts choice to lower case and removes spaces to plug into image generator
				filter: (choice) => choice.toLowerCase().replace(/ /g, ''),
      },
		]);

		// Variable declaration that holds user input and pulls info from 'svg-builder.js'
		const svgCreator = buildSVG(logoParams);

		// Writes a file to 'examples' directory and names the file 'logo.svg'
		await fs.writeFile('./examples/logo.svg', svgCreator);
		console.log('logo.svg successfully generated!');
	} catch (error) {
		console.error('An error occurred:', error);
	}
}

// Runs function upon running 'index.js'
generateLogo();
