import jestConfig from '../jest.js';

it('exports a valid config', () => {
  expect(jestConfig).toBeTruthy();
});
