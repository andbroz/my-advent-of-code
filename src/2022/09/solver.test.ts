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

    expect(result).toEqual(1);
  });

  test('solve part two', () => {
    const data = ['R 5', 'U 8', 'L 8', 'D 3', 'R 17', 'D 10', 'L 25', 'U 20'];
    const result = solvePartTwo(data);

    expect(result).toEqual(36);
  });
});
