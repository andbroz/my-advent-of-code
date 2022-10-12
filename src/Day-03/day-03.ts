export async function submarinePower(diagReport: string[]) {
  const ones: number[] = [];
  const zeros: number[] = [];

  const rates: { gamma: string[]; epsilon: string[] } = {
    gamma: [],
    epsilon: [],
  };

  for (let binaryString of diagReport) {
    binaryString.split("").forEach((value, idx) => {
      if (value === "0") {
        const curr = zeros[idx];
        zeros[idx] = curr !== undefined ? curr + 1 : 1;
      } else if (value === "1") {
        const curr = ones[idx];
        ones[idx] = curr !== undefined ? curr + 1 : 1;
      }
    });
  }

  for (let i = 0; i < ones.length; i++) {
    if (ones[i] > zeros[i]) {
      rates.gamma[i] = "1";
      rates.epsilon[i] = "0";
    } else {
      rates.gamma[i] = "0";
      rates.epsilon[i] = "1";
    }
  }

  const result = {
    gamma: Number.parseInt(rates.gamma.join(""), 2),
    epsilon: Number.parseInt(rates.epsilon.join(""), 2),
  };

  const submarinePower = result.gamma * result.epsilon;

  return { submarinePower };
}
