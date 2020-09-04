const removeFromArray = require('./02-removeFromArray');

describe('removeFromArray', () => {
  it('should return array short of the removed element', () => {
    const originalArray = [1, 2, 3, 4];

    expect(removeFromArray(originalArray, 3)).toEqual([1, 2, 4]);
  });

  it('should not return [1, 2, 3, 4] after removing element', () => {
    const originalArray = [1, 2, 3, 4];

    expect(removeFromArray(originalArray, 3)).not.toEqual([1, 2, 3, 4]);
  });

  it('should not change the argument array after calling the function', () => {
    const originalArray = [1, 2, 3, 4];

    removeFromArray(originalArray, 3)
    expect(originalArray).toEqual([1, 2, 3, 4]);
  });

  it('should not do anything if passed number is not in the array', () => {
    const originalArray = [1, 2, 3, 4];

    expect(removeFromArray(originalArray, 5)).toEqual(originalArray);
  });
});