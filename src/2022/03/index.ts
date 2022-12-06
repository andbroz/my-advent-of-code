import path from 'node:path';
import { readFile } from '../../common/utils';
import { solvePartOne, solvePartTwo } from './solver';

const fileName = 'input.txt';
const filePath = path.join(__dirname, fileName);

async function solve() {
  console.info('--- Day 3: Rucksack Reorganization ---');

  const inputData = await readFile(filePath);

  const sumOfPriorities = solvePartOne(inputData);

  console.log('sum of the priorities:', sumOfPriorities);

  const sumOfPrioritiesForGroups = solvePartTwo(inputData);
  console.log('sum of the Group priorities :', sumOfPrioritiesForGroups);
}

solve();
