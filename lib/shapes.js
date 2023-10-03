class Shapes {
	constructor(colorChoice, textColor) {
		// Initialize shape properties
		this.textColor = textColor;
		this.colorChoice = colorChoice;
		this.viewBox = '0 0 300 200';
		this.aspectRatio = 'xMidYMid meet';
		this.shapeStyle = '';
		this.textAlign = '';
	}

	// Render method for shapes
	render() {
		return `<svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="${this.viewBox}" preserveAspectRatio="${this.aspectRatio}">${this.shapeStyle}${this.textAlign}</svg>`;
	}
}

class Triangle extends Shapes {
	constructor(colorChoice, textColor, base, height) {
		super(colorChoice, textColor);
		// Initialize specific triangle properties
		this.base = base;
		this.height = height;
	}

	render() {
		// Generate and set 'shapeStyle' for triangle
		this.shapeStyle = `<polygon points="0,0 ${this.base},0 ${
			this.base / 2
		},${this.height}" stroke="${this.textColor}" stroke-width="4px" fill="${
			this.colorChoice
		}" />`;
		return this.shapeStyle;
	}
}

class Square extends Shapes {
	constructor(colorChoice, textColor, side) {
		super(colorChoice, textColor);
		// Initialize specific square property
		this.side = side;
	}

	render() {
		// Generate and set 'shapeStyle' for square
		this.shapeStyle = `<rect x="0" y="0" width="${this.side}" height="${this.side}" stroke="${this.textColor}" stroke-width="4px" fill="${this.colorChoice}" />`;
		return this.shapeStyle;
	}
}

class Circle extends Shapes {
	constructor(colorChoice, textColor, radius) {
		super(colorChoice, textColor);
		// Initialize specific circle property
		this.radius = radius;
	}

	render() {
		// Generate and set 'shapeStyle' for circle
		this.shapeStyle = `<circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" stroke="${this.textColor}" stroke-width="4px" fill="${this.colorChoice}" />`;
		return this.shapeStyle;
	}
}

module.exports = { Shapes, Triangle, Square, Circle };
