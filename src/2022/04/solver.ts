export function solvePartOne(input: string[]) {
  let numberOfContainedAssignements = 0;

  for (const pair of input) {
    const [s1, s2] = pair.split(',');
    const rangeS1 = s1.split('-').map(v => Number(v)) as [number, number];
    const rangeS2 = s2.split('-').map(v => Number(v)) as [number, number];

    if (isContainedIn(rangeS1, rangeS2) || isContainedIn(rangeS2, rangeS1)) {
      numberOfContainedAssignements += 1;
    }
  }

  return numberOfContainedAssignements;
}

export function solvePartTwo(input: string[]) {
  let numberOfContainedAssignements = 0;

  for (const pair of input) {
    const [s1, s2] = pair.split(',');
    const rangeS1 = s1.split('-').map(v => Number(v)) as [number, number];
    const rangeS2 = s2.split('-').map(v => Number(v)) as [number, number];

    if (isOverlapping(rangeS1, rangeS2) || isOverlapping(rangeS2, rangeS1)) {
      numberOfContainedAssignements += 1;
    }
  }

  return numberOfContainedAssignements;
}

export function isContainedIn(a: [number, number], b: [number, number]): boolean {
  const [a1, a2] = a;
  const [b1, b2] = b;

  return a1 >= b1 && a2 <= b2;
}

export function isOverlapping(a: [number, number], b: [number, number]): boolean {
  const [a1, a2] = a;
  const [b1, b2] = b;

  const isStartInRange = a1 >= b1 && a1 <= b2;
  const isEndInRange = a2 >= b1 && a2 <= b2;

  return isStartInRange || isEndInRange;
}
