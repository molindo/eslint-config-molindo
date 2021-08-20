const jestConfig = require('../jest');

it('exports a valid config', () => {
  expect(jestConfig).toBeTruthy();
});
