// Imported programs required for this application
const fs = require('fs-extra');
const inquirer = require('inquirer');
const buildSVG = require('./lib/svg-builder.js');

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
				name: 'textColor',
				message: 'Choose your text color',
				choices: ['Black', 'White', 'Royal Blue', 'Tomato', 'Custom'],

				// Converts choice to lower case and removes spaces to plug into image generator
				filter: (choice) =>
					choice.toLowerCase().replace(/ /g, '') === 'custom'
						? 'custom'
						: choice.toLowerCase().replace(/ /g, ''),
			},

			// Allows a user to enter a custom color
			{
				type: 'input',
				name: 'customTextColor',
				message:
					'Enter your custom text color (can be hexadecimal(#000808) or color name)',
				filter: (choice) =>
					choice.toLowerCase().replace(/ /g, ''),
				when: (answers) => answers.textColor === 'custom',
			},

			{
				type: 'list',
				name: 'colorChoice',
				message: 'Pick the color you want the shape to be',
				choices: ['Black', 'Dark Red', 'Olive', 'Hot Pink', 'Custom'],

				// Converts choice to lower case and removes spaces to plug into image generator
				filter: (choice) =>
					choice.toLowerCase().replace(/ /g, '') === 'custom'
						? 'custom'
						: choice.toLowerCase().replace(/ /g, ''),
			},

			// Allows user to enter a custom color
			{
				type: 'input',
				name: 'customShapeColor',
				message:
					'Enter your custom shape color (can be hexadecimal (#181818) or color name)',
				filter: (choice) =>
					choice.toLowerCase().replace(/ /g, ''),
				when: (answers) => answers.colorChoice === 'custom',
			},
		]);

		// Creates object variable that store all user parameters into 'logoParams'
		const {
			logo,
			shape,
			textColor,
			customTextColor,
			colorChoice,
			customShapeColor,
		} = logoParams;

		// Variables that change depending on user selection
		const textColorChoice = customTextColor || textColor;
		const shapeColorChoice = customShapeColor || colorChoice;

		// Variable declaration that user pulls info from 'svg-builder.js'
		const svgCreator = buildSVG({
			logo,
			shape,
			textColor: textColorChoice,
			colorChoice: shapeColorChoice,
		});

		// Writes a file to 'examples' directory and names the file 'logo.svg'
		await fs.writeFile('./examples/logo.svg', svgCreator);
		console.log('Generated logo.svg');
	} catch (error) {
		console.error('An error occurred:', error);
	}
}

// Runs function upon running 'index.js'
generateLogo();
