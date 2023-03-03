const shapes = require('./shapes');
// const shapes = require('../lib/shapes');

describe('Circle', () => {
  it('should return a circle with the specified color', () => {
    const svg = shapes.circle('abc', '#000', '#fff');
    expect(svg).toMatch(/<circle[^>]+fill="#fff"/);
  });

  it('should return text with the specified color', () => {
    const svg = shapes.circle('abc', '#000', '#fff');
    expect(svg).toMatch(/<text[^>]+fill="#000"[^>]+>abc<\/text>/);
  });
});

describe('Triangle', () => {
  it('should return a triangle with the specified color', () => {
    const svg = shapes.triangle('abc', '#000', '#fff');
    expect(svg).toMatch(/<polygon[^>]+fill="#fff"/);
  });

  it('should return text with the specified color', () => {
    const svg = shapes.triangle('abc', '#000', '#fff');
    expect(svg).toMatch(/<text[^>]+fill="#000"[^>]+>abc<\/text>/);
  });
});

describe('Square', () => {
  it('should return a square with specified color', () => {
    const svg = shapes.square('abc', '#000', '#fff');
    expect(svg).toMatch(/<rect[^>]+fill="#fff"/);
  });

  it('should return text with the specified color', () => {
    const svg = shapes.square('abc', '#000', '#fff');
    expect(svg).toMatch(/<text[^>]+fill="#000"[^>]+>abc<\/text>/);
  });
});
