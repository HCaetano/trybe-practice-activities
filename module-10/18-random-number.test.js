const numberGenerator = require('./18-random-number');

describe('random number', () => {
  it('check if mocked random number works with preset return value and is called two times', () => {
    numberGenerator.randomNumber = jest.fn().mockReturnValue(10);

    expect(numberGenerator.randomNumber()).toBe(10);
    expect(numberGenerator.randomNumber).toHaveBeenCalled();
    expect(numberGenerator.randomNumber()).toBe(10);
    expect(numberGenerator.randomNumber).toHaveBeenCalledTimes(2);
  });

  it('implement it as division a single time, then reset function', () => {
    numberGenerator.randomNumber = jest.fn().mockImplementationOnce((a, b) => a / b);

    expect(numberGenerator.randomNumber(30, 2)).toBe(15);
    expect(numberGenerator.randomNumber).toHaveBeenCalled();
    numberGenerator.randomNumber.mockReset();
    expect(numberGenerator.randomNumber(10, 2)).toBe(undefined);
  });

  it('implement it as multiplication of three values, then make it to be a single value times two', () => {
    numberGenerator.randomNumber = jest.fn().mockImplementation((a, b, c) => a * b * c);

    expect(numberGenerator.randomNumber(1, 2, 3)).toBe(6);
    expect(numberGenerator.randomNumber).toHaveBeenCalled();
    expect(numberGenerator.randomNumber).toHaveBeenCalledWith(1, 2, 3);
    expect(numberGenerator.randomNumber(3, 3, 3)).toBe(27);
    expect(numberGenerator.randomNumber).toHaveBeenCalledTimes(2);
    expect(numberGenerator.randomNumber).toHaveBeenCalledWith(3, 3, 3);
    numberGenerator.randomNumber.mockReset();
    expect(numberGenerator.randomNumber(1, 2)).toBe(undefined);

    numberGenerator.randomNumber = jest.fn().mockImplementation(number => number * 2);

    expect(numberGenerator.randomNumber(2)).toBe(4);
    expect(numberGenerator.randomNumber).toHaveBeenCalled();
    expect(numberGenerator.randomNumber).toHaveBeenCalledWith(2);
    expect(numberGenerator.randomNumber(9)).toBe(18);
    expect(numberGenerator.randomNumber).toHaveBeenCalledTimes(2);
    expect(numberGenerator.randomNumber).toHaveBeenCalledWith(9);
  });
});