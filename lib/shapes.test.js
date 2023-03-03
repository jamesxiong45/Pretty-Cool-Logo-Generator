const shapes = require('./shapes');

describe('Circle', () => {
  it('should return a circle with the specified color', () => {
    const svg = shapes.circle('abc', 'black', 'white');
    expect(svg).toMatch(/<circle[^>]+fill="white"/);
  });

  it('should return text with the specified color', () => {
    const svg = shapes.circle('abc', 'black', 'white');
    expect(svg).toMatch(/<text[^>]+fill="black"[^>]+>abc<\/text>/);
  });
});

describe('Triangle', () => {
  it('should return a triangle with the specified color', () => {
    const svg = shapes.triangle('abc', 'black', 'white');
    expect(svg).toMatch(/<polygon[^>]+fill="white"/);
  });

  it('should return text with the specified color', () => {
    const svg = shapes.triangle('abc', 'black', 'white');
    expect(svg).toMatch(/<text[^>]+fill="black"[^>]+>abc<\/text>/);
  });
});

describe('Square', () => {
  it('should return a square with specified color', () => {
    const svg = shapes.square('abc', 'black', 'white');
    expect(svg).toMatch(/<rect[^>]+fill="white"/);
  });

  it('should return text with the specified color', () => {
    const svg = shapes.square('abc', 'black', 'white');
    expect(svg).toMatch(/<text[^>]+fill="black"[^>]+>abc<\/text>/);
  });
});
