interface ElfCaloriesData {
  calories: number[];
  id: number;
  total: number;
}

export function splitCaloriesByElves(input: string[]): ElfCaloriesData[] {
  const data: ElfCaloriesData[] = [];

  let elfId = 1;
  let elfCalories: number[] = [];

  for (const item of input) {
    if (!item) {
      data.push({
        calories: elfCalories,
        id: elfId,
        total: elfCalories.reduce((a, b) => a + b, 0),
      });
      elfId++;
      elfCalories = [];
      continue;
    }
    elfCalories.push(Number.parseInt(item, 10));
  }
  data.push({
    calories: elfCalories,
    id: elfId,
    total: elfCalories.reduce((a, b) => a + b, 0),
  });

  return data;
}

export function findElfCarringMostCalories(
  elfsData: ElfCaloriesData[],
): ElfCaloriesData | undefined {
  let maxCalories = 0;
  let elfWithMostCalories: ElfCaloriesData | undefined;

  for (const elf of elfsData) {
    if (elf.total > maxCalories) {
      elfWithMostCalories = elf;
      maxCalories = elf.total;
    }
  }

  return elfWithMostCalories;
}

export function findTopThreeElvesWithMostCalories(elfsData: ElfCaloriesData[]) {
  return elfsData
    .sort((a, b) => a.total - b.total)
    .slice(-3)
    .reverse();
}
