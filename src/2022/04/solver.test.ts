import { solvePartOne, solvePartTwo } from './solver';

describe('Day X', () => {
  let input = [] as string[];

  beforeEach(() => {
    input = ['2-4,6-8', '2-3,4-5', '5-7,7-9', '2-8,3-7', '6-6,4-6', '2-6,4-8'];
  });
  test('solve part one', () => {
    const result = solvePartOne(input);

    expect(result).toEqual(2);
  });
  test('solve part two', () => {
    const result = solvePartTwo(input);

    expect(result).toEqual(4);
  });
});
