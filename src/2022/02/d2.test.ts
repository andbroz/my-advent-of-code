import { parseStrategy, parseStrategyTwo } from './d2';

describe('Day2', () => {
  let input = [] as string[];

  beforeEach(() => {
    input = ['A Y', 'B X', 'C Z'];
  });
  test('parse input', () => {
    const parsed = parseStrategy(input);
    const result = parsed.reduce((acc, round) => acc + round.roundScore, 0);

    expect(parsed).toEqual([
      {
        opponent: 'A',
        player: 'Y',
        winner: 'player',
        shapeResultPoint: 2,
        roundResultPoints: 6,
        roundScore: 8,
      },
      {
        opponent: 'B',
        player: 'X',
        winner: 'opponent',
        shapeResultPoint: 1,
        roundResultPoints: 0,
        roundScore: 1,
      },
      {
        opponent: 'C',
        player: 'Z',
        winner: 'draw',
        shapeResultPoint: 3,
        roundResultPoints: 3,
        roundScore: 6,
      },
    ]);

    expect(result).toBe(15);
  });

  test('parse second strategy', () => {
    const parsed = parseStrategyTwo(input);
    const result = parsed.reduce((acc, round) => acc + round.roundScore, 0);

    expect(parsed).toEqual([
      {
        opponent: 'A',
        player: 'Y',
        winner: 'draw',
        shapeResultPoint: 1,
        roundResultPoints: 3,
        roundScore: 4,
        playerShape: 'Rock',
      },
      {
        opponent: 'B',
        player: 'X',
        winner: 'opponent',
        shapeResultPoint: 1,
        roundResultPoints: 0,
        roundScore: 1,
        playerShape: 'Rock',
      },
      {
        opponent: 'C',
        player: 'Z',
        winner: 'player',
        shapeResultPoint: 1,
        roundResultPoints: 6,
        roundScore: 7,
        playerShape: 'Rock',
      },
    ]);

    expect(result).toBe(12);
  });
});
