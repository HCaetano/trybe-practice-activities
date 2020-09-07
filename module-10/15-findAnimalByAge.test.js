const Animals = [
  { name: 'Dorminhoco', age: 1, type: 'Dog' },
  { name: 'Soneca', age: 2, type: 'Dog' },
  { name: 'Preguiça', age: 5, type: 'Cat' },
];

const findAnimalByAge = (age) => {
  return new Promise((resolve, reject) => {
    const animalObjects = Object.values(Animals);
    const foundAnimal = animalObjects.find(animal => animal.age === age);

    if (foundAnimal) {
      return resolve(foundAnimal);
    }

    return reject('No animal with that age!');
  });
};

const getAnimal = (age) => {
  return findAnimalByAge(age).then(animal => animal);
};

describe('findAnimalByAge', () => {
  describe('When animal with that age is found', () => {
    it('Return aninal object', () => {
      expect.assertions(1);
      return getAnimal(5).then(animal => {
        expect(animal).toEqual({ name: 'Preguiça', age: 5, type: 'Cat' });
      });
    });
  });

  describe('When animal with that age is not found', () => {
    it('Return an error', () => {
      expect.assertions(1);
      return getAnimal(7).catch(error => {
        expect(error).toEqual('No animal with that age!');
      });
    });
  });
});