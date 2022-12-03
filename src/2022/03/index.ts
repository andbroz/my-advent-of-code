import path from 'node:path';
import { readFile } from '../../common/utils';
import { solvePartOne, solvePartTwo } from './solver';

const fileName = 'input.txt';
const filePath = path.join(__dirname, fileName);

(async () => {
  const inputData = await readFile(filePath);
})();
