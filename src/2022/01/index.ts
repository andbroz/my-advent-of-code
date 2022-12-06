import path from 'node:path';
import { readFile } from '../../common/utils';
import {
  splitCaloriesByElves,
  findElfCarringMostCalories,
  findTopThreeElvesWithMostCalories,
} from './d1';

const fileName = 'input.txt';
const filePath = path.join(__dirname, fileName);

async function solve() {
  console.info('--- Day 1: Calorie Counting ---');
  const inputData = await readFile(filePath);

  const splitted = splitCaloriesByElves(inputData);
  const elfWithMostCalories = findElfCarringMostCalories(splitted);

  const topThree = findTopThreeElvesWithMostCalories(splitted);
  const topThreeTotal = topThree.reduce((acc, elf) => acc + elf.total, 0);

  // How many total Calories is that Elf carrying?
  // 70296 is correct

  console.log(elfWithMostCalories);
  console.table(topThree);
  console.info({ topThree: JSON.stringify(topThree), topThreeTotal });

  //   {
  //   topThree: [
  //     { calories: [Array], id: 86, total: 70296 },
  //     { calories: [Array], id: 61, total: 68707 },
  //     { calories: [Array], id: 150, total: 66378 }
  //   ],
  //   topThreeTotal: 205381
  // }
}

solve();
