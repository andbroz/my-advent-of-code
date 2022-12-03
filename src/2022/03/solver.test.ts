import { findErrorsInRuckSack, solvePartOne, solvePartTwo } from './solver';

describe('Day 3', () => {
  let input = [] as string[];

  beforeEach(() => {
    input = [
      'vJrwpWtwJgWrhcsFMMfFFhFp',
      'jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL',
      'PmmdzqPrVvPwwTWBwg',
      'wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn',
      'ttgJtRGJQctTZtZT',
      'CrZsJsPPZsGzwwsLwLmpwMDw',
    ];
  });
  test('find errors in rucksack', () => {
    const result = findErrorsInRuckSack(input);

    expect(result).toEqual(['p', 'L', 'P', 'v', 't', 's']);
  });

  test('solve part one', () => {
    const sumOfPriorities = solvePartOne(input);

    expect(sumOfPriorities).toBe(157);
  });

  test('solve part two', () => {
    const sumOfPriorities = solvePartTwo(input);

    expect(sumOfPriorities).toBe(70);
  });
});
