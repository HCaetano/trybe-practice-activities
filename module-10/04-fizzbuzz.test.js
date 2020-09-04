const fizzBuzz = require('./04-fizzbuzz');

describe('fizz buzz', () => {
  it('should return "fizzbuzz" if number is divisible by 3 and 5', () => {
    expect(fizzBuzz(15)).toBe('fizzbuzz');
  });

  it('should return "fizz" if number is divisible only by 3', () => {
    expect(fizzBuzz(9)).toBe('fizz');
  });

  it('should return "buzz" if number is divisible only by 5', () => {
    expect(fizzBuzz(20)).toBe('buzz');
  });

  it('should return the argument itself if it is not divisible by 3 and 5', () => {
    expect(fizzBuzz(17)).toBe(17);
  });

  it('should return false if argument is not a number', () => {
    expect(fizzBuzz('not-a-number')).toBeFalsy();
  });
});
