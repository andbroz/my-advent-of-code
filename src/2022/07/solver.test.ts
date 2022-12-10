import { solvePartOne, solvePartTwo } from './solver';

describe('Day 7', () => {
  let input = [] as string[];

  beforeEach(() => {
    input = [
      '$ cd /',
      '$ ls',
      'dir a',
      '14848514 b.txt',
      '8504156 c.dat',
      'dir d',
      '$ cd a',
      '$ ls',
      'dir e',
      '29116 f',
      '2557 g',
      '62596 h.lst',
      '$ cd e',
      '$ ls',
      '584 i',
      '$ cd ..',
      '$ cd ..',
      '$ cd d',
      '$ ls',
      '4060174 j',
      '8033020 d.log',
      '5626152 d.ext',
      '7214296 k',
    ];
  });
  test('solve part one', () => {
    const result = solvePartOne(input);

    expect(result).toEqual(95437);
  });
  test('solve part two', () => {
    const result = solvePartTwo(input);

    expect(result).toEqual(24933642);
  });
});
