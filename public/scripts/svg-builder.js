const { Triangle, Square, Circle } = require('../../lib/shapes.js');

function buildSVG(userParams) {
  const { logo, shape, colorChoice } = userParams;

  let shapeStyle = '';
  let textAlign = '';
  let viewBox = '';
  let aspectRatio = 'xMidYMid meet';
  let textColor = 'white';

  switch (colorChoice) {
    case 'black':
      textColor = '#f5f5f5';
      break;
    case 'darkred':
      textColor = '#dc806f';
      break;
    case 'navy':
      textColor = '#daa520';
      break;
    case 'olive':
      textColor = '#c71585';
      break;
    case 'indigo':
      textColor = '#fdb515';
      break;
    case 'saddlebrown':
      textColor = '#fffdd0';
      break;
    case 'hotpink':
      textColor = '#00ced1';
      break;
    default:
      textColor = 'white';
      break;
  }
  switch (shape) {
    case 'Triangle':
      const triangle = new Triangle(colorChoice, 300, 200);
        shapeStyle = triangle.getSvgParams(textColor);
      viewBox = '0 0 300 200';
      textAlign = `<text x="50%" y="35%" text-anchor="middle" dominant-baseline="middle" font-size="60" font-weight="bold" fill="${textColor}">${logo}</text>`;
      break;
    case 'Circle':
      const circle = new Circle(colorChoice, 195);
        shapeStyle = circle.getSvgParams(textColor);
      viewBox = '0 0 400 400';
      textAlign = `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="140" font-weight="bold" fill="${textColor}">${logo}</text>`;
      break;
    case 'Square':
      const square = new Square(colorChoice, 300);
        shapeStyle = square.getSvgParams(textColor);
      viewBox = '0 0 300 300';
      textAlign = `<text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="104" font-weight="bold" fill="${textColor}">${logo}</text>`;
      break;
    default:
      throw new Error('Invalid shape selected');
  }

  const svg = `
  <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="${viewBox}" preserveAspectRatio="${aspectRatio}">
  ${shapeStyle}
  ${textAlign}
  </svg>`;

  return svg;
}

module.exports = buildSVG;