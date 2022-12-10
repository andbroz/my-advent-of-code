import { solvePartOne, solvePartTwo } from './solver';

describe('Day 9', () => {
  let input = [] as string[];

  beforeEach(() => {
    input = ['R 4', 'U 4', 'L 3', 'D 1', 'R 4', 'D 1', 'L 5', 'R 2'];
  });
  test('solve part one', () => {
    const result = solvePartOne(input);

    expect(result).toEqual(13);
  });
  test('solve part two', () => {
    const result = solvePartTwo(input);

    expect(result).toEqual('To be implemented');
  });
});
