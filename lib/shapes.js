
class Shapes {
  constructor(colorChoice) {
    this.colorChoice = colorChoice;
  }

  describe() {
    return `this is a ${this.colorChoice} shape`;
  }
  getSvgParams(textColor) {

  }
}

class Triangle extends Shapes {
  constructor(colorChoice, base, height) {
    super(colorChoice);
    this.base = base;
    this.height = height;
  }

  triangleArea() {
    return 0.5 * (this.base * this.height);
  }
  getSvgParams(textColor) {
    return `<polygon points="0,0 ${this.base}, 0 ${this.base / 2}, ${this.height}" stroke="${textColor}" stroke-width="4px" fill="${this.colorChoice}" />`;
  }
}

class Square extends Shapes {
  constructor(colorChoice, side) {
    super(colorChoice);
    this.side = side;
  }
  squareArea() {
    return (this.side * this.side);
  }
  getSvgParams(textColor) {
    return `<rect x="0" y="0" width="${this.side}" height="${this.side}" stroke="${textColor}" stroke-width="4px" fill="${this.colorChoice}" />`;
  }
}

class Circle extends Shapes {
  constructor(colorChoice, radius) {
    super(colorChoice);
    this.radius = radius;
  }
  circleArea() {
    return Math.PI * (this.radius * this.radius);
  }
  getSvgParams(textColor) {
    return `<circle cx="${this.radius}" cy="${this.radius}" r="${this.radius}" stroke="${textColor}" stroke-width="4px" fill="${this.colorChoice}" />`;
  }
}

module.exports = { Shapes, Triangle, Square, Circle };
