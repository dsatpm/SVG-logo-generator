const { Shapes, Triangle, Square, Circle } = require('./shapes.js');

describe('Shapes', () => {
  test('it should be a shape', () => {
    const shape = new Shapes('Navy');
    expect(shape.describe()).toBe('this is a navy shape');
  });
});

describe('Triangle', () => {
  test('it should calculate the area of the triangle accurately', () => {
    const triangle = new Triangle('Olive', 4, 3);
    expect(triangle.triangleArea()).toBe(6);
  });
});

describe('Square', () => {
  test('it should calculate the are of the square accurately', () => {
    const square = new Square('Hot Pink', 5);
    expect(square.squareArea()).toBe(25);
  });
});

describe('Circle', () => {
  test('it should calculate the area of a circle accurately', () => {
    const circle = new Circle('Dark Red', 3);
    expect(circle.circleArea()).toBeCloseTo(28.27, 2);
  });
});