export function submarinePower(diagReport: string[]) {
  const ones: number[] = [];
  const zeros: number[] = [];

  const rates: { gamma: string[]; epsilon: string[] } = {
    gamma: [],
    epsilon: [],
  };

  for (let binaryString of diagReport) {
    binaryString.split('').forEach((value, idx) => {
      if (value === '0') {
        const curr = zeros[idx];
        zeros[idx] = curr !== undefined ? curr + 1 : 1;
      } else if (value === '1') {
        const curr = ones[idx];
        ones[idx] = curr !== undefined ? curr + 1 : 1;
      }
    });
  }

  for (let i = 0; i < ones.length; i++) {
    if (ones[i] > zeros[i]) {
      rates.gamma[i] = '1';
      rates.epsilon[i] = '0';
    } else {
      rates.gamma[i] = '0';
      rates.epsilon[i] = '1';
    }
  }

  const result = {
    gamma: Number.parseInt(rates.gamma.join(''), 2),
    epsilon: Number.parseInt(rates.epsilon.join(''), 2),
  };

  const submarinePower = result.gamma * result.epsilon;

  return { submarinePower };
}

export function getOxygenGeneratorRating(data: string[]) {
  let rating = '';
  let currentIndex = 0;

  let currentData = data;

  let filteredData = [];

  const itemLength = data[0].length;

  do {
    const bitCriteria = getBitCriteriaForRating(currentData, currentIndex, 'generator');
    filteredData = currentData.filter((val) => val[currentIndex] === bitCriteria);
    if (filteredData.length === 1) {
      rating = filteredData[0];
      break;
    }

    // next iteration
    currentData = filteredData;
    currentIndex++;
  } while (currentIndex < itemLength);

  return Number.parseInt(rating, 2);
}

export function getCO2ScrubberRating(data: string[]) {
  let rating = '';

  let currentIndex = 0;

  let currentData = data;

  let filteredData = [];

  const itemLength = data[0].length;

  do {
    const bitCriteria = getBitCriteriaForRating(currentData, currentIndex, 'scrubber');
    filteredData = currentData.filter((val) => val[currentIndex] === bitCriteria);
    if (filteredData.length === 1) {
      rating = filteredData[0];
      break;
    }

    // next iteration
    currentData = filteredData;
    currentIndex++;
  } while (currentIndex < itemLength);

  return Number.parseInt(rating, 2);
}

export function getBitCriteriaForRating(
  data: string[],
  bitIndex: number,
  ratingType: 'generator' | 'scrubber',
) {
  const result = data.reduce(
    (bits, val) => {
      if (val[bitIndex] === '0') {
        bits.zeroes += 1;
        return bits;
      }
      bits.ones += 1;
      return bits;
    },
    { zeroes: 0, ones: 0 },
  );

  if (ratingType === 'generator') {
    return result.ones >= result.zeroes ? '1' : '0';
  }

  return result.ones >= result.zeroes ? '0' : '1';
}
