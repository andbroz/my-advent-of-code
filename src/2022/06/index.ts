import path from 'node:path';
import { readFile } from '../../common/utils';
import { solvePartOne, solvePartTwo } from './solver';

const fileName = 'input.txt';
const filePath = path.join(__dirname, fileName);

async function solve() {
  console.info('--- Day 6: Tuning Trouble ---');
  const inputData = await readFile(filePath);

  const resultOne = solvePartOne(inputData);
  const resultTwo = solvePartTwo(inputData);

  console.log('Result part one:', resultOne); //answer 1658
  console.log('Result part two:', resultTwo); //answer 2260
}

solve();
