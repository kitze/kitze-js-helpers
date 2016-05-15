/** @module Type helpers */

import _ from 'lodash';
import * as numberHelpers from '../helpers/number-helpers';

/**
 * @description Returns the type of the variable as a string
 * @param a
 * @example
 * // returns 'string'
 * getType('kitze');
 * @example
 * // returns 'array'
 * getType([1,2,3]);
 * @returns {string}
 */
export const getType = (a) => {
  return ({}).toString.call(a).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
};

/**
 * Checks if every variable in the objectsAndTypesArray matches the type (that's provided as the next argument in the array)
 * @param objectsAndTypesArray
 * /**
 * @example
 * // returns true
 * matchTypes('kitze', 'string', [1,2,3], 'array');
 * @example
 * // returns false
 * matchTypes(5, 'string', {'name': 'kitze'}, 'string');
 * @returns {boolean|*} Returns the value of x for the equation.
 */
export const matchTypes = (...objectsAndTypesArray) => {
  return _(objectsAndTypesArray).every(function (a, key) {
    return !numberHelpers.isEven(key) ? true : getType(a) === objectsAndTypesArray[key + 1]
  });
};