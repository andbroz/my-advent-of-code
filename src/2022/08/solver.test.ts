import { solvePartOne, solvePartTwo } from './solver';

describe('Day 8', () => {
  let input = [] as string[];

  beforeEach(() => {
    input = ['30373', '25512', '65332', '33549', '35390'];
  });
  test('solve part one', () => {
    const result = solvePartOne(input);

    expect(result).toEqual(21);
  });
  test('solve part two', () => {
    const result = solvePartTwo(input);

    expect(result).toEqual(8);
  });
});
