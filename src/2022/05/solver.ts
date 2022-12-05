export function solvePartOne(input: string[]) {
  const { stacks, procedure } = readStacksAndProcedure(input);

  for (const operation of procedure) {
    const source = stacks.get(operation.from);
    const target = stacks.get(operation.to);

    if (!source || !target) {
      continue;
    }

    for (let i = 0; i < operation.move; i++) {
      const crate = source.pop();

      if (crate) {
        target.push(crate);
      }
    }
  }

  const topOfStacks: string[] = [];

  stacks.forEach(stack => {
    const crate = stack.pop();
    if (crate) {
      topOfStacks.push(crate);
    }
  });

  return topOfStacks.join('');
}

export function solvePartTwo(input: string[]) {
  const { stacks, procedure } = readStacksAndProcedure(input);

  for (const operation of procedure) {
    const source = stacks.get(operation.from);
    const target = stacks.get(operation.to);

    if (!source || !target) {
      continue;
    }

    const crates = source.splice(-operation.move);

    if (crates) {
      target.push(...crates);
    }
  }

  const topOfStacks: string[] = [];

  stacks.forEach(stack => {
    const crate = stack.pop();
    if (crate) {
      topOfStacks.push(crate);
    }
  });

  return topOfStacks.join('');
}

export function readStacksAndProcedure(input: string[]) {
  const splitIndex = input.findIndex(value => value === '');

  const stacksRaw = input.slice(0, splitIndex).map(v => [...v]);
  const procedureRaw = input.slice(splitIndex + 1);

  const stacks = parseStacks(stacksRaw);
  const procedure = parseProcedures(procedureRaw);

  return { stacks, procedure };
}

export function parseStacks(stacksRaw: string[][]) {
  const stackIdWithPositions = stacksRaw[stacksRaw.length - 1]
    .map((id, idx) => ({ id: +id, idx }))
    .filter(({ id }) => id);

  const crates = stacksRaw.slice(0, -1);

  const parsedStacksMap = new Map<number, string[]>();

  for (const stack of stackIdWithPositions) {
    const cratesInStack = crates
      .map(v => v[stack.idx])
      .filter(val => val && val.trim())
      .reverse();
    parsedStacksMap.set(stack.id, cratesInStack);
  }

  return parsedStacksMap;
}

export function parseProcedures(input: string[]) {
  return input.map(item => {
    const [, move, , from, , to] = item.split(' ');

    return { move: +move, from: +from, to: +to };
  });
}
