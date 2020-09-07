const uppercase = (string, callback) => {
  callback(string.toUpperCase());
}

it(`uppercase 'test' to equal 'TEST'`, (done) => {
  uppercase('test', (string) => {
    expect(string).toBe('TEST');
    done();
  });
});