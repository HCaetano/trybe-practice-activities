const exercise2 = require('./17-math-mock');
jest.mock('./17-math-mock');

describe('math operations', () => {
  it('checks if subtraction has been called', () => {
    exercise2.subtraction = jest.fn();

    exercise2.subtraction(1, 1);
    expect(exercise2.subtraction).toHaveBeenCalled();
  });

  it(`check if multiplication works with given parameter and if it's been called`, () => {
    exercise2.multiplication = jest.fn().mockReturnValue(10);

    expect(exercise2.multiplication(2, 5)).toBe(10);
    expect(exercise2.multiplication).toHaveBeenCalled();
  });

  it('check if sum works, is called and has the right parameters', () => {
    exercise2.sum.mockImplementation((a, b) => a + b);

    expect(exercise2.sum(1, 9)).toBe(10);
    expect(exercise2.sum).toHaveBeenCalled();
    expect(exercise2.sum).toHaveBeenCalledWith(1, 9);
  })

  it('check if division works multiple times, if it has the right parameters and number of times it was called', () => {
    exercise2.division = jest
      .fn()
      .mockReturnValue(15)
      .mockReturnValueOnce(2)
      .mockReturnValueOnce(5);

    expect(exercise2.division(4, 2)).toBe(2);
    expect(exercise2.division).toHaveBeenCalled();
    expect(exercise2.division).toHaveBeenCalledWith(4, 2);
    expect(exercise2.division(10, 2)).toBe(5);
    expect(exercise2.division).toHaveBeenCalledWith(10, 2);
    expect(exercise2.division(45, 3)).toBe(15);
    expect(exercise2.division).toHaveBeenCalledWith(45, 3);
    expect(exercise2.division).toHaveBeenCalledTimes(3);
  });

  it('mock subtraction, give it a set value for return, check if it works and if it was called, then restore it to original form', () => {
    exercise2.subtraction = jest.fn().mockImplementation((a, b) => a * b).mockReturnValue(20);

    expect(exercise2.subtraction(10, 2)).toBe(20);
    expect(exercise2.subtraction).toHaveBeenCalledTimes(1);
    exercise2.subtraction.mockReset();
    expect(exercise2.subtraction(5, 3)).toBe(undefined);
  });
});