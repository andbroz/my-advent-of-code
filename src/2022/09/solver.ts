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
      makeTailMovement(currentTailPosition, distance, direction);

      if (!visitedPositions.get(JSON.stringify(currentTailPosition))) {
        visitedPositions.set(JSON.stringify(currentTailPosition), { visited: true });
      }
    }
  }

  return visitedPositions.size;
}

export function solvePartTwo(input: string[]) {
  return 'To be implemented';
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

function makeTailMovement(tailPosition: Position, distance: Position, headDirection: string) {
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

  // switch (headDirection) {
  //   case 'R': {
  //     tailPosition.col += distance.col - 1;
  //     if (distance.row !== 0) {
  //       tailPosition.row += distance.row;
  //     }
  //     break;
  //   }
  //   case 'L': {
  //     tailPosition.col += distance.col + 1;
  //     if (distance.row !== 0) {
  //       tailPosition.row += distance.row;
  //     }
  //     break;
  //   }
  //   case 'U': {
  //     tailPosition.row += distance.row + 1;
  //     if (distance.col !== 0) {
  //       tailPosition.col += distance.col;
  //     }
  //     break;
  //   }
  //   case 'D': {
  //     tailPosition.row += distance.row + 1;
  //     if (distance.col !== 0) {
  //       tailPosition.col += distance.col;
  //     }
  //     break;
  //   }
  //   default:
  //     throw new Error('Unknown direction to move');
  // }
}
