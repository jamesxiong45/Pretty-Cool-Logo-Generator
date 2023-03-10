const shapes = {
    // creates circle 300x200 with text, text color, and shape color inputs
    circle: function(text, textColor, shapeColor) {
      return `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
          <circle cx="150" cy="100" r="75" fill="${shapeColor}" />
          <text x="50%" y="50%" fill="${textColor}" font-size="72" text-anchor="middle" alignment-baseline="central">${text}</text>
        </svg>
      `;
    },
    // creates triangle 300x200 with text, text color, and shape color inputs
    triangle: function(text, textColor, shapeColor) {
      return `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
          <polygon points="150,25 275,175 25,175" fill="${shapeColor}" />
          <text x="50%" y="50%" fill="${textColor}" font-size="72" text-anchor="middle" alignment-baseline="central">${text}</text>
        </svg>
      `;
    },
    // creates square 300x200 with text, text color, and shape color inputs
    square: function(text, textColor, shapeColor) {
      return `
        <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200">
          <rect x="25" y="25" width="250" height="150" fill="${shapeColor}" />
          <text x="50%" y="50%" fill="${textColor}" font-size="72" text-anchor="middle" alignment-baseline="central">${text}</text>
        </svg>
      `;
    }
  };
  
  module.exports = shapes;
  