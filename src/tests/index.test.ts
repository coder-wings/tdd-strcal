
import { sum } from "../app/index.ts";

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});