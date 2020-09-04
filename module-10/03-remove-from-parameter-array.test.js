const removeFromParameterArray = require('./03-remove-from-parameter-array');

describe('removeFromParameterArray', () => {
  it('should remove number 3 from parameter array', () => {
    const originalArray = [1, 2, 3, 4];

    removeFromParameterArray(originalArray, 3);
    expect(originalArray).toEqual([1, 2, 4]);
  });

  it('should not return original array after removing element', () => {
    const originalArray = [1, 2, 3, 4];

    removeFromParameterArray(originalArray, 3);
    expect(originalArray).not.toEqual([1, 2, 3, 4]);
  });

  test('should change the passed array', () => {
    const originalArray = [1, 2, 3, 4];

    removeFromParameterArray(originalArray, 1);
    expect(originalArray).toEqual([2, 3, 4]);
  });

  it('should not do anything if passed number not in the array', () => {
    const originalArray = [1, 2, 3, 4];

    removeFromParameterArray(originalArray, 5);
    expect(originalArray).toEqual([1, 2, 3, 4]);
  });
});
