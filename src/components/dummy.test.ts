import { Greeter } from './dummy';

test('My Greeter', () => {
  expect(Greeter('Carl')).toBe('Hello Carl');
});
