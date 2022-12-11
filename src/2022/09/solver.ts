interface Position {
  row: number;
  col: number;
}

export function solvePartOne(moves: string[]) {
  const visitedPositions = new Map<string, { visited: boolean }>();

  const currentTailPosition: Position = { row: 0, col: 0 };
  const currentHeadPosition: Position = { row: 0, col: 0 };

  visitedPositions.set(JSON.stringify(currentTailPosition), { visited: true });

  for (const currentMove of moves) {
    const [direction, stepsStr] = currentMove.split(' ');
    const steps = Number.parseInt(stepsStr);

    // move head number of steps
    for (let step = 0; step < steps; step++) {
      makeOneStep(currentHeadPosition, direction);

      // calculate distance
      const distance: Position = {
        row: currentHeadPosition.row - currentTailPosition.row,
        col: currentHeadPosition.col - currentTailPosition.col,
      };

      // check if tail needs to move
      if (Math.abs(distance.row) < 2 && Math.abs(distance.col) < 2) {
        // no move
        continue;
      }

      // determine tail movements direction
      makeTailMovement(currentTailPosition, distance);

      if (!visitedPositions.get(JSON.stringify(currentTailPosition))) {
        visitedPositions.set(JSON.stringify(currentTailPosition), { visited: true });
      }
    }
  }

  return visitedPositions.size;
}

export function solvePartTwo(moves: string[]) {
  const visitedPositions = new Map<string, { visited: boolean }>();

  const rope: Position[] = [
    { row: 0, col: 0 },
    { row: 0, col: 0 },
    { row: 0, col: 0 },
    { row: 0, col: 0 },
    { row: 0, col: 0 },
    { row: 0, col: 0 },
    { row: 0, col: 0 },
    { row: 0, col: 0 },
    { row: 0, col: 0 },
    { row: 0, col: 0 },
  ];

  const tailPosition = rope.length - 1;

  visitedPositions.set(JSON.stringify(rope[tailPosition]), { visited: true });

  for (const currentMove of moves) {
    const [direction, stepsStr] = currentMove.split(' ');
    const steps = Number.parseInt(stepsStr);

    // move head number of steps
    for (let step = 0; step < steps; step++) {
      // head
      makeOneStep(rope[0], direction);

      for (let knot = 1; knot < rope.length; knot++) {
        // calculate distance
        const distance: Position = {
          row: rope[knot - 1].row - rope[knot].row,
          col: rope[knot - 1].col - rope[knot].col,
        };

        // check if tail needs to move
        if (Math.abs(distance.row) < 2 && Math.abs(distance.col) < 2) {
          // no move
          continue;
        }

        // determine tail movements direction
        makeTailMovement(rope[knot], distance);

        if (!visitedPositions.get(JSON.stringify(rope[tailPosition]))) {
          visitedPositions.set(JSON.stringify(rope[tailPosition]), { visited: true });
        }
      }
    }
  }

  return visitedPositions.size;
}

function makeOneStep(currentPosition: Position, direction: string): void {
  switch (direction) {
    case 'R': {
      currentPosition.col += 1;
      break;
    }
    case 'L': {
      currentPosition.col -= 1;
      break;
    }
    case 'U': {
      currentPosition.row -= 1;
      break;
    }
    case 'D': {
      currentPosition.row += 1;
      break;
    }
    default:
      throw new Error('Unknown direction to move');
  }
}

function makeTailMovement(tailPosition: Position | undefined, distance: Position) {
  if (!tailPosition) {
    throw new Error('No tail position');
  }

  if (distance.row === 0) {
    const sign = distance.col / Math.abs(distance.col);
    tailPosition.col = tailPosition.col + sign;
  }

  if (distance.col === 0) {
    const sign = distance.row / Math.abs(distance.row);
    tailPosition.row = tailPosition.row + sign;
  }

  if (distance.row !== 0 && distance.col !== 0) {
    const signRow = distance.row / Math.abs(distance.row);
    const signCol = distance.col / Math.abs(distance.col);
    tailPosition.col = tailPosition.col + signCol;
    tailPosition.row = tailPosition.row + signRow;
  }
}
