const sum = require('./01-sum');

describe('sum', () => {
  it('should return 9', () => {
    expect(sum(4, 5)).toBe(9);
  });

  it('should return 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  it('should throw an error when a parameter is a string', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow();
  });

  it('should throw "parameters must be numbers" error message', () => {
    expect(() => {
      sum(4, '5');
    }).toThrow(/parameters must be numbers/);
  });
});