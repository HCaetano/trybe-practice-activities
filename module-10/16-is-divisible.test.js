const exercise1 = require('./16-is-divisible');

describe('random number', () => {
  it('random number is called', () => {
    exercise1.randomNumber = jest.fn();

    exercise1.randomNumber();
    expect(exercise1.randomNumber).toHaveBeenCalled();
  });

  it('isDivisible works when passed an even number', () => {
    exercise1.randomNumber = jest.fn().mockReturnValue(20);

    expect(exercise1.isDivisible(2)).toBeTruthy();
  });

  it('check if isDivisible works when called four times', () => {
    exercise1.randomNumber = jest
      .fn()
      .mockReturnValue(10)
      .mockReturnValueOnce(6)
      .mockReturnValueOnce(8);

    expect(exercise1.isDivisible(2)).toBeTruthy();
    expect(exercise1.isDivisible(2)).toBeTruthy();
    expect(exercise1.isDivisible(2)).toBeTruthy();
    expect(exercise1.isDivisible(2)).toBeTruthy();
  });
});