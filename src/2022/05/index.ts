import path from 'node:path';
import { readFile } from '../../common/utils';
import { solvePartOne, solvePartTwo } from './solver';

const fileName = 'input.txt';
const filePath = path.join(__dirname, fileName);

async function solve() {
  console.info('--- Day 5: Supply Stacks ---');

  const inputData = await readFile(filePath);

  const resultOne = solvePartOne(inputData);
  const resultTwo = solvePartTwo(inputData);

  console.log(
    'After the rearrangement procedure completes, what crate ends up on top of each stack?',
  );
  console.log('Result part one:', resultOne); // answer QNHWJVJZW
  console.log(
    'After the rearrangement procedure completes, what crate ends up on top of each stack ?',
  );
  console.log('Result part two:', resultTwo); // answer BPCZJLFJW
}

solve();
