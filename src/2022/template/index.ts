import path from 'node:path';
import { readFile } from '../../common/utils';
import { solvePartOne, solvePartTwo } from './solver';

const fileName = 'input.txt';
const filePath = path.join(__dirname, fileName);

async function solve() {
  console.info('Day X: ...');
  const inputData = await readFile(filePath);

  const resultOne = solvePartOne(inputData);
  const resultTwo = solvePartTwo(inputData);

  console.log('Result part one:', resultOne); //answer ...
  console.log('Result part two:', resultTwo); //answer ...
}

solve();
