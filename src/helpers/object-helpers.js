import * as typeHelpers from '../helpers/type-helpers.js';
import _ from 'lodash';

/**
 * @description Extend each object in array with a specific key and value.
 * @example
 * extendEach([{name:'Kristijan'}, {name:'Martin'}], 'surname', 'some new surname');
 * @param {Array} array
 * @param {String} key
 * @param {String} value
 * @returns {Array} _.map of the array with inserted key:value into each array member
 */
export const extendEach = (array, key, value) => {
  return _.map(array, (object) => {
    object[key] = value;
    return object;
  });
};
/**
 * @description Merge first object with the second object, but if the first object is undefined, return the second object
 * @param {Object} object1
 * @param {Object} object2
 * @returns {Object}
 */
export const merge = (object1, object2) => {
  return object1 === undefined ? object2 : _.extend(object1, object2);
};
/**
 * @description
 * Check if obj is an object, but because _.isObject() returns true for arrays too,
 * check if the object also doesn't have the 'length' property, so it returns true only for objects and not arrays
 * @param object
 * @returns {boolean}
 */

export const isObject = (object) => {
  return typeHelpers.getType(object) === "object";
};
