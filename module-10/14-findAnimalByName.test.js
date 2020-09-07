const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByName = (name) => {
  return new Promise((resolve, reject) => {
    const animalObjects = Object.values(Animals);
    const foundAnimal = animalObjects.find(animal => animal.name === name);

    if (foundAnimal) {
      return resolve(foundAnimal);
    }

    return reject('No animal with that name!');
  });
}

const getAnimal = (name) => {
  return findAnimalByName(name).then(animal => animal);
}
// ---------------------

describe('Testing promise - findAnimalByName', () => {
  describe('When an animal with that name is found', () => {
    test('Return animal object', () => {
      expect.assertions(1);
      return getAnimal('Dorminhoco').then(animal => {
        expect(animal).toEqual({ name: 'Dorminhoco', age: 1, type: 'Dog' });
      });
    });
  });

  describe('When an animal with that name is not found', () => {
    test('Return an error', () => {
      expect.assertions(1);
      return getAnimal('Bob').catch(error =>
        expect(error).toEqual('No animal with that name!')
      );
    });
  });
});