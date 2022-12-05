import { readStacksAndProcedure, solvePartOne, solvePartTwo } from './solver';

describe('Day X', () => {
  let input = [] as string[];

  beforeEach(() => {
    input = [
      '    [D]',
      '[N] [C]',
      '[Z] [M] [P]',
      ' 1   2   3',
      '',
      'move 1 from 2 to 1',
      'move 3 from 1 to 3',
      'move 2 from 2 to 1',
      'move 1 from 1 to 2',
    ];
  });

  test('read starting stacks correctly', () => {
    const { stacks, procedure } = readStacksAndProcedure(input);

    expect(stacks).toEqual(
      new Map([
        [1, ['Z', 'N']],
        [2, ['M', 'C', 'D']],
        [3, ['P']],
      ]),
    );
    expect(procedure).toEqual([
      {
        from: 2,
        move: 1,
        to: 1,
      },
      {
        from: 1,
        move: 3,
        to: 3,
      },
      {
        from: 2,
        move: 2,
        to: 1,
      },
      {
        from: 1,
        move: 1,
        to: 2,
      },
    ]);
  });
  test('solve part one', () => {
    const result = solvePartOne(input);

    expect(result).toBe('CMZ');
  });
  test('solve part two', () => {
    const result = solvePartTwo(input);

    expect(result).toBe('MCD');
  });
});
