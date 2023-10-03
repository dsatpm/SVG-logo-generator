// Imported libraries
const fs = require('fs-extra'); // File system operation
const inquirer = require('inquirer'); // User prompt library
const buildSVG = require('./lib/svg-builder.js'); // Custom library to build SVG
const Color = require('color'); // Color validation library

// Function that takes user input and generates a logo
async function generateLogo() {
	try {
		const logoParams = await inquirer.prompt([
			// Input prompts for logo parameters
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

				// Converts choice to lower case and removes spaces for processing
				filter: (choice) =>
					choice.toLowerCase().replace(/ /g, '') === 'custom'
						? 'custom'
						: choice.toLowerCase().replace(/ /g, ''),
			},

			// Allows a user to enter a custom text color
			{
				type: 'input',
				name: 'customTextColor',
				message:
					'Enter your custom text color (can be hexadecimal(#000808) or color name)',
				filter: (choice) => choice.toLowerCase().replace(/ /g, ''),
				when: (answers) => answers.textColor === 'custom',
			},

			{
				type: 'list',
				name: 'colorChoice',
				message: 'Pick the color you want the shape to be',
				choices: ['Black', 'Dark Red', 'Olive', 'Hot Pink', 'Custom'],

				// Converts choice to lower case and removes spaces for processing
				filter: (choice) =>
					choice.toLowerCase().replace(/ /g, '') === 'custom'
						? 'custom'
						: choice.toLowerCase().replace(/ /g, ''),
			},

			// Allows user to enter a custom shape fill color
			{
				type: 'input',
				name: 'customShapeColor',
				message:
					'Enter your custom shape color (can be hexadecimal (#181818) or color name)',
				filter: (choice) => choice.toLowerCase().replace(/ /g, ''),
				when: (answers) => answers.colorChoice === 'custom',
			},
		]);

		// Destructures user input into an object
		const {
			logo,
			shape,
			textColor,
			customTextColor,
			colorChoice,
			customShapeColor,
		} = logoParams;

		// Determines text and shape colors depending on user input
		const textColorChoice =
			textColor === 'custom' ? customTextColor : textColor;
		const shapeColorChoice =
			colorChoice === 'custom' ? customShapeColor : colorChoice;

		// Validate chosen custom colors
		if (!validColor(textColorChoice) || !validColor(shapeColorChoice)) {
			console.error(
				"One of the custom colors was invalid. Please use hexadecimal (include '#') values or color names."
			);
			return;
		}

		// Create SVG logo using user input values
		const svgCreator = buildSVG({
			logo,
			shape,
			textColor: textColorChoice,
			colorChoice: shapeColorChoice,
		});

		// Write the generated SVG logo to a file in 'examples' directory
		await fs.writeFile('./examples/logo.svg', svgCreator);
		console.log('Generated logo.svg');
	} catch (error) {
		console.error('An error occurred:', error);
	}
}

// Function to validate color choices
function validColor(color) {
	try {
		// Use 'color' library to validate color format
		Color(color);
		return true;
	} catch (error) {
		// Return false if format is invalid
		return false;
	}
}

// Runs logo generating function when script is executed
generateLogo();
