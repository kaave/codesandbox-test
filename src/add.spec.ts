import { add } from './add';

test('整数', () => {
  expect(add(1, 2)).toBe(3);
});

test('小数', () => {
  expect(add(1.2, 3.4)).toBe(4.6);
});
