interface Round {
  opponent: string;
  player: string;
}

interface RoundResult extends Round {
  winner: Winner;
  shapeResultPoint: number;
  roundResultPoints: number;
  roundScore: number;
}

type Shape = 'Rock' | 'Paper' | 'Scissors';

type Winner = 'opponent' | 'player' | 'draw';

type OpponentMove = string;
type PlayerMove = string;

const result: Record<OpponentMove, Record<PlayerMove, Winner>> = {
  A: {
    X: 'draw',
    Y: 'player',
    Z: 'opponent',
  },
  B: {
    X: 'opponent',
    Y: 'draw',
    Z: 'player',
  },
  C: {
    X: 'player',
    Y: 'opponent',
    Z: 'draw',
  },
};

const winnerMapperTwo: Record<string, Winner> = {
  X: 'opponent',
  Y: 'draw',
  Z: 'player',
};

const selectShapeForResult: Record<OpponentMove, Record<PlayerMove, Shape>> = {
  // opponent move A for Rock, B for Paper, and C for Scissors.

  // The Elf finishes helping with the tent and sneaks back over to you.
  // "Anyway, the second column says how the round needs to end:
  // X means you need to lose,
  // Y means you need to end the round in a draw, and
  // Z means you need to win. Good luck!"

  //  Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock.

  A: {
    X: 'Scissors',
    Y: 'Rock',
    Z: 'Paper',
  },
  B: {
    X: 'Rock',
    Y: 'Paper',
    Z: 'Scissors',
  },
  C: {
    X: 'Paper',
    Y: 'Scissors',
    Z: 'Rock',
  },
};

const shapeScore: Record<string | Shape, number> = {
  // shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors)
  X: 1,
  Y: 2,
  Z: 3,
  Rock: 1,
  Paper: 2,
  Scissors: 3,
};

const roundResultPoints: Record<Winner, number> = {
  opponent: 0,
  draw: 3,
  player: 6,
};

export function parseStrategy(input: string[]): RoundResult[] {
  return input.map(item => {
    const [opponent, player] = item.split(' ');
    const round = { opponent, player };
    const winner = selectWinner(round);

    return {
      ...round,
      winner,
      shapeResultPoint: shapeScore[player],
      roundResultPoints: roundResultPoints[winner],
      roundScore: shapeScore[player] + roundResultPoints[winner],
    };
  });
}

export function selectWinner({ opponent, player }: Round): Winner {
  // opponent move A for Rock, B for Paper, and C for Scissors.
  // player move X for Rock, Y for Paper, and Z for Scissors
  //  Rock defeats Scissors, Scissors defeats Paper, and Paper defeats Rock.
  // If both players choose the same shape, the round instead ends in a draw.

  return result[opponent][player];
}

export function parseStrategyTwo(input: string[]) {
  return input.map(item => {
    const [opponent, player] = item.split(' ');
    const round = { opponent, player };
    const playerShape = selectPlayerShape(round);
    const winner = winnerMapperTwo[player];

    return {
      ...round,
      winner,
      playerShape,
      shapeResultPoint: shapeScore[playerShape],
      roundResultPoints: roundResultPoints[winner],
      roundScore: shapeScore[playerShape] + roundResultPoints[winner],
    };
  });
}

export function selectPlayerShape({ opponent, player }: Round): Shape {
  return selectShapeForResult[opponent][player];
}
