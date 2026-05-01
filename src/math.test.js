import { expect, test } from 'vitest';
import { add } from './math.js';

test('Додавання 2 + 2 має дорівнювати 4', () => {
  expect(add(2, 2)).toBe(4);
});

test('Додавання від’ємних чисел -1 + -1 має бути -2', () => {
  expect(add(-1, -1)).toBe(-2);
});