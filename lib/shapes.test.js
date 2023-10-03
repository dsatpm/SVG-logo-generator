const { Shapes, Triangle, Square, Circle } = require('./shapes.js');

// Test color selection
const colorChoice = 'black';
const textColor = 'white';

// Test for all shapes
describe('Shapes', () => {
	test('it should render a shape', () => {
		const shape = new Shapes(colorChoice, textColor);
		// Checks if rendered SVG matches expected one
		expect(shape.render()).toBe(
			`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="${shape.viewBox}" preserveAspectRatio="${shape.aspectRatio}">${shape.shapeStyle}${shape.textAlign}</svg>`
		);
	});
});

// Test for triangle
describe('Triangle', () => {
	test('it should render a triangle with chosen color', () => {
		const triangle = new Triangle(colorChoice, textColor, 300, 200);
		const expectedSVG = `<polygon points="0,0 300,0 150,200" stroke="white" stroke-width="4px" fill="black" />`;
		// Checks if rendered SVG matches expected one
		expect(triangle.render()).toBe(expectedSVG);
	});
});

// Test for square
describe('Square', () => {
	test('it should render a square with chosen color', () => {
		const square = new Square(colorChoice, textColor, 100);
		const expectedSVG = `<rect x="0" y="0" width="100" height="100" stroke="white" stroke-width="4px" fill="black" />`;
		// Checks if rendered SVG matches expected one
		expect(square.render()).toBe(expectedSVG);
	});
});

// Test for circle
describe('Circle', () => {
	test('it should render a circle with chosen color', () => {
		const circle = new Circle(colorChoice, textColor, 200);
		const expectedSVG = `<circle cx="200" cy="200" r="200" stroke="white" stroke-width="4px" fill="black" />`;
		// Checks if rendered SVG matches expected one
		expect(circle.render()).toBe(expectedSVG);
	});
});
