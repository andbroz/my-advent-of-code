import {
  submarinePower,
  getOxygenGeneratorRating,
  getCO2ScrubberRating,
  getBitCriteriaForRating,
} from './day-03';

describe('Day 03', () => {
  let inputData = [] as string[];

  beforeEach(() => {
    inputData = [
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
  });
  test('submarinePower', async () => {
    const result = await submarinePower(inputData);

    expect(result.submarinePower).toBe(198);
  });

  test('calculate bit criteria', () => {
    const bitCriteriaGenerator = getBitCriteriaForRating(inputData, 0, 'generator');
    const bitCriteriaScrubber = getBitCriteriaForRating(inputData, 0, 'scrubber');

    expect(bitCriteriaGenerator).toBe('1');
    expect(bitCriteriaScrubber).toBe('0');
  });
  test('calculate oxygen generator rating', () => {
    const oxygenGeneratorRating = getOxygenGeneratorRating(inputData);

    expect(oxygenGeneratorRating).toBe(23);
  });
  test('calculate co2 scrubber rating', () => {
    const co2ScrubberRating = getCO2ScrubberRating(inputData);

    expect(co2ScrubberRating).toBe(10);
  });
  test('calculate life support rating', () => {
    const oxygenGeneratorRating = getOxygenGeneratorRating(inputData);
    const co2ScrubberRating = getCO2ScrubberRating(inputData);

    const lifeSupportRating = oxygenGeneratorRating * co2ScrubberRating;

    expect(lifeSupportRating).toBe(230);
  });
});
