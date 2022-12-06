import path from 'node:path';
import { readFile } from '../../common/utils';
import { solvePartOne, solvePartTwo } from './solver';

const fileName = 'input.txt';
const filePath = path.join(__dirname, fileName);

async function solve() {
  console.info('--- Day 4: Camp Cleanup ---');
  const inputData = await readFile(filePath);

  const resultOne = solvePartOne(inputData);
  const resultTwo = solvePartTwo(inputData);

  console.log('In how many assignment pairs does one range fully contain the other?');
  console.log('Result part one:', resultOne); // answer 526
  console.log('In how many assignment pairs do the ranges overlap?');
  console.log('Result part two:', resultTwo); // answer 886
}

solve();
