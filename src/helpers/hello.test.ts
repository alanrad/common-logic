import { hello } from './hello';

describe('Test hello component', () => {
  test('basic 1', () => {
    expect(hello()).toBe('Hello World!');
  });

  test('basic 2', () => {
    const text = 'You!';
    expect(hello(text)).toBe(`Hello ${text}`);
  });
});
