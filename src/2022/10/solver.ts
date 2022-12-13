export function solvePartOne(input: string[]) {
  let registerX = 1;
  let cycle = 1;

  const cyclesMap = new Map();

  cyclesMap.set(cycle, registerX);

  for (const [index, instruction] of input.entries()) {
    const [command, arg] = instruction.split(' ');

    switch (command) {
      case 'addx': {
        const val = Number.parseInt(arg);
        cycle++;
        cyclesMap.set(cycle, registerX);

        cycle++;
        registerX += val;

        cyclesMap.set(cycle, registerX);

        break;
      }

      case 'noop': {
        cycle++;
        cyclesMap.set(cycle, registerX);

        break;
      }

      default:
        break;
    }
  }

  const result = [20, 60, 100, 140, 180, 220]
    .map((cycle) => cycle * cyclesMap.get(cycle))
    .reduce((sum, val) => sum + val, 0);

  return result;
}

export function solvePartTwo(input: string[]) {
  return 'To be implemented';
}
