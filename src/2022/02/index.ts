import path from 'node:path';
import { readFile } from '../../common/utils';
import { parseStrategy, parseStrategyTwo } from './d2';

const fileName = 'input.txt';
const filePath = path.join(__dirname, fileName);

(async () => {
  const inputData = await readFile(filePath);

  const parsed = parseStrategy(inputData);

  const result = parsed.reduce((acc, round) => acc + round.roundScore, 0);

  console.log('score be if everything goes exactly according to your strategy guide:', result);
  // correct answer 15691

  const parsedTwo = parseStrategyTwo(inputData);
  const resultTwo = parsedTwo.reduce((acc, round) => acc + round.roundScore, 0);

  console.log('total score for second strategy:', resultTwo);
})();
