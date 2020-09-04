const object1 = {
  title: 'My Title',
  description: 'My Description',
};

const object2 = {
  description: 'My Description',
  title: 'My Title',
};

const object3 = {
  title: 'My Different Title',
  description: 'My Description',
};

describe('check if objects are equal', () => {
  it('check if objects 1 and 1 are equal', () => {
    expect(object1).toEqual(object2);
  });

  it('check if objects 1 and 3 are not equal', () => {
    expect(object1).not.toEqual(object3);
  });
});
