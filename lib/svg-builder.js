const { Triangle, Square, Circle } = require('./shapes.js');

// Function that builds the SVG logo based on user parameters
function buildSVG(userParams) {
	// Destructure user parameters
	const { logo, shape, textColor, colorChoice } = userParams;

	// Variable initialization
	let shapeStyle = '';
	let textAlign = '';
	let viewBox = '';
	let aspectRatio = 'xMidYMid meet';

	// Initialize shape instances
	let triangle, circle, square;

	// Determine which shape was chosen and apply user parameters to SVG
	switch (shape) {
		case 'Triangle':
			// Create triangle instance
			triangle = new Triangle(colorChoice, textColor, 300, 200);
			// Set 'shapeStyle', 'viewBox', and 'textAlign' properties for triangle
			shapeStyle = triangle.render();
			viewBox = '0 0 300 200';
			textAlign = `<text x="50%" y="35%" text-anchor="middle" dominant-baseline="middle" font-size="60" font-weight="bold" fill="${textColor}">${logo}</text>`;
			break;
		case 'Circle':
			// Create circle instance
			circle = new Circle(colorChoice, textColor, 200);
			// Set 'shapeStyle', 'viewBox', and 'textAlign' properties for circle
			shapeStyle = circle.render();
			textAlign = `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="140" font-weight="bold" fill="${textColor}">${logo}</text>`;
			viewBox = shape === 'Circle' ? '0 0 400 400' : '0 0 300 200';
			break;
		case 'Square':
			// Create square instance
			square = new Square(colorChoice, textColor, 300);
			// Set 'shapeStyle', 'viewBox', and 'textAlign' properties for square
			shapeStyle = square.render();
			viewBox = '0 0 300 300';
			textAlign = `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="104" font-weight="bold" fill="${textColor}">${logo}</text>`;
			break;
		default:
			throw new Error('Invalid shape selected');
	}

	// Constructs finalized SVG in a string
	const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="${viewBox}" preserveAspectRatio="${aspectRatio}">
  ${shapeStyle}
  ${textAlign}
  </svg>`;

	return svg;
}

// Exports 'buildSVG' function
module.exports = buildSVG;
