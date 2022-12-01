import {
  splitCaloriesByElves,
  findElfCarringMostCalories,
  findTopThreeElvesWithMostCalories,
} from './d1';

describe('Day 01/2022', () => {
  let input = [] as string[];
  beforeEach(() => {
    input = [
      '1000',
      '2000',
      '3000',
      '',
      '4000',
      '',
      '5000',
      '6000',
      '',
      '7000',
      '8000',
      '9000',
      '',
      '10000',
    ];
  });

  test('split calories for elves', () => {
    const splitted = [
      { calories: [1000, 2000, 3000], id: 1, total: 6000 },
      { calories: [4000], id: 2, total: 4000 },
      { calories: [5000, 6000], id: 3, total: 11000 },
      { calories: [7000, 8000, 9000], id: 4, total: 24000 },
      { calories: [10000], id: 5, total: 10000 },
    ];

    expect(splitCaloriesByElves(input)).toEqual(splitted);
  });

  test('finds max calories', () => {
    const splitted = [
      { calories: [1000, 2000, 3000], id: 1, total: 6000 },
      { calories: [4000], id: 2, total: 4000 },
      { calories: [5000, 6000], id: 3, total: 11000 },
      { calories: [7000, 8000, 9000], id: 4, total: 24000 },
      { calories: [10000], id: 5, total: 10000 },
    ];

    expect(findElfCarringMostCalories(splitted)).toEqual({
      calories: [7000, 8000, 9000],
      id: 4,
      total: 24000,
    });
  });

  test('find top 3', () => {
    const splitted = [
      { calories: [1000, 2000, 3000], id: 1, total: 6000 },
      { calories: [4000], id: 2, total: 4000 },
      { calories: [5000, 6000], id: 3, total: 11000 },
      { calories: [7000, 8000, 9000], id: 4, total: 24000 },
      { calories: [10000], id: 5, total: 10000 },
    ];

    expect(findTopThreeElvesWithMostCalories(splitted)).toEqual([
      { calories: [7000, 8000, 9000], id: 4, total: 24000 },
      { calories: [5000, 6000], id: 3, total: 11000 },
      { calories: [10000], id: 5, total: 10000 },
    ]);
  });
});
