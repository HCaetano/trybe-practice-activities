const fetch = require('node-fetch');

const getRepos = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then((data) => {
      return data.map((repo) => repo.name)
    });
}

describe('fetch user repos from GitHub', () => {
  const url = 'https://api.github.com/users/tryber/repos';

  it(`repo list should contain 'sd-01-week4-5-project-todo-list' and 'sd-01-week4-5-project-meme-generator'`, () => {
    return getRepos(url)
      .then(result => {
        expect(result).not.toContain('sd-01-week4-5-project-todo-list');
        expect(result).not.toContain('sd-01-week4-5-project-meme-generator');
      })
  });
});