import fs from "node:fs/promises";
import path from "node:path";

const fileName = "input.txt";

const filePath = path.join(__dirname, fileName);

async function runSubmarine(filePath: string) {
  const data = await fs.readFile(filePath, { encoding: "utf-8" });
  const commands = data.split("\r\n");

  const position = followCommands(commands);
  const result = position.horizontal * position.depth;

  console.log({ position, result });
}

function followCommands(commands: string[]) {
  const position = {
    horizontal: 0,
    depth: 0,
    aim: 0,
  };

  for (let command of commands) {
    const [direction, value] = command.split(" ");

    switch (direction) {
      case "forward":
        const parsedValue = Number.parseInt(value);
        position.horizontal += parsedValue;
        position.depth += position.aim * parsedValue;
        break;
      case "up":
        position.aim -= Number.parseInt(value);
        break;
      case "down":
        position.aim += Number.parseInt(value);
        break;

      default:
        console.warn(`Unknown command ${direction}`);
        break;
    }
  }
  return position;
}

runSubmarine(filePath);
