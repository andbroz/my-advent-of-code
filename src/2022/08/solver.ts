export function solvePartOne(input: string[]) {
  const forest = input.map(row => [...row]);

  const sumAllVisibleTrees = forest.reduce((sumOfvisibleTrees, treeRow, rowIndex, trees) => {
    let numberOfTreesVisibleInRow = 0;

    const leftEdgeIndex = 0;
    const rightEdgeIndex = treeRow.length - 1;
    const topEdgeIndex = 0;
    const bottomEdgeIndex = trees.length - 1;

    for (const [colIndex, tree] of treeRow.entries()) {
      // tree at the edge is visible
      if (
        colIndex === leftEdgeIndex ||
        colIndex === rightEdgeIndex ||
        rowIndex === topEdgeIndex ||
        rowIndex === bottomEdgeIndex
      ) {
        numberOfTreesVisibleInRow += 1;
        continue;
      }

      // check visibility from left
      const isLeftVisible = treeRow
        .slice(leftEdgeIndex, colIndex)
        .every(val => Number.parseInt(val) < Number.parseInt(tree));

      const isRightVisible = treeRow
        .slice(colIndex + 1)
        .every(val => Number.parseInt(val) < Number.parseInt(tree));

      const { treesAbove, treeBelow } = getTreesAboveBelow(forest, rowIndex, colIndex);

      const isTopVisible = treesAbove.every(val => Number.parseInt(val) < Number.parseInt(tree));
      const isBottomVisible = treeBelow.every(val => Number.parseInt(val) < Number.parseInt(tree));

      if (isLeftVisible || isRightVisible || isBottomVisible || isTopVisible) {
        numberOfTreesVisibleInRow += 1;
        continue;
      }
    }

    return sumOfvisibleTrees + numberOfTreesVisibleInRow;
  }, 0);

  return sumAllVisibleTrees;
}

export function solvePartTwo(input: string[]) {
  const forest = input.map(row => [...row]);

  const allTreesScenicScores = forest.reduce((scenicScoresArr, treeRow, rowIndex, trees) => {
    let rowScenicScores: number[] = [];

    const leftEdgeIndex = 0;
    const rightEdgeIndex = treeRow.length - 1;
    const topEdgeIndex = 0;
    const bottomEdgeIndex = trees.length - 1;

    for (const [colIndex, tree] of treeRow.entries()) {
      // check visibility from left
      const { distance: viewDistanceLeft } = treeRow
        .slice(leftEdgeIndex, colIndex)
        .reverse()
        .reduce(
          (view, val) => {
            if (view.isBlocked) {
              return view;
            }

            if (Number.parseInt(val) >= Number.parseInt(tree)) {
              return { ...view, distance: view.distance + 1, isBlocked: true };
            }

            return { ...view, distance: view.distance + 1 };
          },
          { distance: 0, isBlocked: false },
        );

      const { distance: viewDistanceRight } = treeRow.slice(colIndex + 1).reduce(
        (view, val) => {
          if (view.isBlocked) {
            return view;
          }

          if (Number.parseInt(val) >= Number.parseInt(tree)) {
            return { ...view, distance: view.distance + 1, isBlocked: true };
          }

          return { ...view, distance: view.distance + 1 };
        },
        { distance: 0, isBlocked: false },
      );

      const { treesAbove, treeBelow } = getTreesAboveBelow(forest, rowIndex, colIndex);

      const { distance: viewDistanceTop } = treesAbove.reverse().reduce(
        (view, val) => {
          if (view.isBlocked) {
            return view;
          }

          if (Number.parseInt(val) >= Number.parseInt(tree)) {
            return { ...view, distance: view.distance + 1, isBlocked: true };
          }

          return { ...view, distance: view.distance + 1 };
        },
        { distance: 0, isBlocked: false },
      );

      const { distance: viewDistanceBottom } = treeBelow.reduce(
        (view, val) => {
          if (view.isBlocked) {
            return view;
          }

          if (Number.parseInt(val) >= Number.parseInt(tree)) {
            return { ...view, distance: view.distance + 1, isBlocked: true };
          }

          return { ...view, distance: view.distance + 1 };
        },
        { distance: 0, isBlocked: false },
      );

      const scenicScore =
        viewDistanceLeft * viewDistanceRight * viewDistanceTop * viewDistanceBottom;

      rowScenicScores.push(scenicScore);
    }

    return [...scenicScoresArr, ...rowScenicScores];
  }, [] as number[]);

  return Math.max(...allTreesScenicScores);
}

function getTreesAboveBelow(forest: string[][], rowIndex: number, colIndex: number) {
  const treesAbove: string[] = [];

  const treeBelow: string[] = [];

  for (let i = 0; i < rowIndex; i++) {
    treesAbove.push(forest[i][colIndex]);
  }

  for (let i = rowIndex + 1; i < forest.length; i++) {
    treeBelow.push(forest[i][colIndex]);
  }

  return { treesAbove, treeBelow };
}
