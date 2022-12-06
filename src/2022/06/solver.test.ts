import { solvePartOne, solvePartTwo } from './solver';

describe('Day X', () => {
  let input = [] as string[];

  beforeEach(() => {
    input = [
      'mjqjpqmgbljsphdztnvjfqwrcgsmlb',
      'bvwbjplbgvbhsrlpgdmjqwftvncz',
      'nppdvjthqldpwncqszvftbrmjlhg',
      'nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg',
      'zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw',
    ];
  });
  test('solve part one', () => {
    const result = solvePartOne(input);

    expect(result).toEqual([7, 5, 6, 10, 11]);
  });
  test('solve part two', () => {
    const result = solvePartTwo(input);

    expect(result).toEqual([19, 23, 23, 29, 26]);
  });
});
