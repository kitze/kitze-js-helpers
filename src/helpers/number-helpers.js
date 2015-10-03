export const cycleValue = (current, max) => {
  current++;
  if (current > max) {
    current = 0;
  }
  return current;
};

export const cycleValueAround = (current, increase, max) => {
  current = current + increase;
  if (current >= max) {
    current = 0;
  }
  else if (current === -1) {
    current = max - 1;
  }
  return current;
};

export const isEven = (num) => {
  return num % 2 === 0;
};