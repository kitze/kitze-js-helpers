function cycleValue(current, max) {
  current++;
  if (current > max) {
    current = 0;
  }
  return current;
}

function cycleValueAround(current, increase, max) {
  current = current + increase;
  if (current >= max) {
    current = 0;
  }
  else if (current === -1) {
    current = max - 1;
  }
  return current;
}

function isEven(num) {
  return num % 2 === 0;
}

module.exports = {
  cycleValue: cycleValue,
  cycleValueAround: cycleValueAround,
  isEven: isEven
};
