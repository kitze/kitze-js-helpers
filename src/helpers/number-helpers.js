/** @module Number helpers */

/**
 * @description Increases the current value until is bigger than the max value, then it resets it to 0
 * @param {number} current
 * @param {number} max
 * @return {number}
 */
export const cycleValue = (current, max) => {
  current++;
  if (current > max) {
    current = 0;
  }
  return current;
};

/**
 * @description Increases the current value until is bigger than the max value, then resets it to 0. If the value is decreased below 0 it's reset to the max value
 * @param {number} current
 * @param {number} change
 * @param {number} max
 * @return {number}
 */
export const cycleValueAround = (current, change, max) => {
  current = current + change;
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