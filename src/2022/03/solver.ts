import { group } from 'console';

const smallLetters = 'abcdefghijklmnopqrstuvwxyz';
const bigLetters = smallLetters.toUpperCase();

// Lowercase item types a through z have priorities 1 through 26.
// Uppercase item types A through Z have priorities 27 through 52.
// priorityMap.indexOf('a')+1

const priorityMap = [...smallLetters, ...bigLetters];

export function solvePartOne(input: string[]) {
  const errorsInRuckSack = findErrorsInRuckSack(input);

  const priorities = errorsInRuckSack.map(item => priorityMap.indexOf(item) + 1);

  return priorities.reduce((sum, v) => sum + v, 0);
}

export function solvePartTwo(input: string[]) {
  const groupBadge = findGroupBadge(input);

  const priorities = groupBadge.map(item => priorityMap.indexOf(item) + 1);

  return priorities.reduce((sum, v) => sum + v, 0);
}

export function findErrorsInRuckSack(input: string[]) {
  return input.map(rucksack => {
    const mid = rucksack.length / 2;
    const firstCompartment = [...rucksack.slice(0, mid)];
    const secondCompartment = [...rucksack.slice(mid)];

    return firstCompartment.reduce((foundItem, item) => {
      if (secondCompartment.includes(item)) {
        return item;
      }
      return foundItem;
    }, '');
  });
}

export function findGroupBadge(input: string[]) {
  const groupBadge: string[] = [];

  const size = input.length;

  for (let i = 0; i < size - 2; i += 3) {
    // groups.push([input[i], input[i + 1], input[i + 2]]);
    const elfOne = [...input[i]];
    const elfTwo = [...input[i + 1]];
    const elfThree = [...input[i + 2]];

    for (const item of elfOne) {
      if (elfTwo.includes(item) && elfThree.includes(item)) {
        groupBadge.push(item);
        break;
      }
    }
  }

  return groupBadge;
}
