const users = {
  4: { name: 'Mark' },
  5: { name: 'Paul' }
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: 'User with ' + id + ' not found.' });
  });
}

const getUserName = (userID) => {
  return findUserById(userID).then(user => user.name);
}

describe('find user by id, using a promise', () => {
  it(`should return 'Mark' if passed 4 as id`, () => {
    return getUserName(4)
      .then(userName => {
        expect(userName).toBe('Mark');
      });
  });

  it('should return error if passed 6 as id', () => {
    return getUserName(6)
      .catch(error => {
        expect(error).toEqual({ error: 'User with 6 not found.' });
      })
  });
});