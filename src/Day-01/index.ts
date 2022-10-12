import * as fs from "node:fs/promises";
import * as path from "node:path";

const inputFilename = "input.data.txt";

const file = path.join(__dirname, inputFilename);

async function sonar(filePath: string) {
  const inputData = await fs.readFile(filePath, { encoding: "utf-8" });

  const arrData = inputData
    .split("\n")
    .map((strVal) => Number.parseInt(strVal));

  const increasesCount = countDepthIncreaseFromPrevious(arrData);

  const windowsIncCount = slidingWindowIncreaseCount(arrData);

  console.log({ increasesCount, windowsIncCount });
}

function countDepthIncreaseFromPrevious(data: number[]): number {
  const result = data.map((val, i, arr) => {
    if (i === 0) {
      return "n/a";
    }

    const depthChange = val - arr[i - 1];
    if (depthChange > 0) {
      return "inc";
    } else if (depthChange === 0) {
      return "zero";
    }
    return "dec";
  });

  return result.reduce((acc, val) => {
    if (val === "inc") {
      return acc + 1;
    }
    return acc;
  }, 0);
}

function slidingWindowIncreaseCount(data: number[]): number {
  const windowSumData: number[] = [];

  const dataSize = data.length;
  for (let i = 0; i + 2 < dataSize; i++) {
    const a = data[i];
    const b = data[i + 1];
    const c = data[i + 2];

    windowSumData.push(a + b + c);
  }

  return countDepthIncreaseFromPrevious(windowSumData);
}

sonar(file);
