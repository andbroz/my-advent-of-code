export function solvePartOne(input: string[]) {
  return input.map(item => {
    return findMarkerPosition(item);
  });
}

export function solvePartTwo(input: string[]) {
  return input.map(item => {
    return findMessagePosition(item);
  });
}

export function findMarkerPosition(stream: string): number {
  const data = [...stream];

  const markerWindow = [];

  for (const [idx, val] of data.entries()) {
    markerWindow.push(val);

    if (markerWindow.length < 4) {
      continue;
    }

    if (isMarker(markerWindow)) {
      return idx + 1;
    }
    markerWindow.shift();
  }

  return -1;
}

export function findMessagePosition(stream: string): number {
  const data = [...stream];

  const markerWindow = [];

  for (const [idx, val] of data.entries()) {
    markerWindow.push(val);

    if (markerWindow.length < 14) {
      continue;
    }

    if (isMarker(markerWindow)) {
      return idx + 1;
    }
    markerWindow.shift();
  }

  return -1;
}

export function isMarker(markerMaybe: string[]): boolean {
  const uniqueSet = new Set(markerMaybe);

  return markerMaybe.length === uniqueSet.size;
}
