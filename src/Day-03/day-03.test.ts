import { submarinePower } from './day-03';

describe('Day 03', () => {
  test('submarinePower', async () => {
    const inputData = [
      '00100',
      '11110',
      '10110',
      '10111',
      '10101',
      '01111',
      '00111',
      '11100',
      '10000',
      '11001',
      '00010',
      '01010',
    ];

    const result = await submarinePower(inputData);

    expect(result.submarinePower).toBe(198);
  });
});
