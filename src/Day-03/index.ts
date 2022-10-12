import path from 'node:path';
import { readFile } from '../common/utils';
import { submarinePower, getCO2ScrubberRating, getOxygenGeneratorRating } from './day-03';

const fileName = 'input.txt';
const filePath = path.join(__dirname, fileName);

(async () => {
  const diagReport = await readFile(filePath);
  const result = await submarinePower(diagReport);

  console.log(result); // solution is 3901196

  const oxygenGeneratorRating = getOxygenGeneratorRating(diagReport);
  const co2ScrubberRating = getCO2ScrubberRating(diagReport);

  const lifeSupportRating = oxygenGeneratorRating * co2ScrubberRating;

  console.log({ lifeSupportRating }); //Solution is 4412188
})();
