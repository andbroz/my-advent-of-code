import path from 'node:path';
import { readFile } from '../../common/utils';
import { solvePartOne, solvePartTwo } from './solver';

const fileName = 'input.txt';
const filePath = path.join(__dirname, fileName);

(async () => {
  console.info('Rucksack Reorganization');

  const inputData = await readFile(filePath);

  const sumOfPriorities = solvePartOne(inputData);

  console.info('Solution Part One');
  console.log('sum of the priorities:', sumOfPriorities);

  console.info('Solution Part Two');
  const sumOfPrioritiesForGroups = solvePartTwo(inputData);
  console.log('sum of the Group priorities :', sumOfPrioritiesForGroups);
})();
