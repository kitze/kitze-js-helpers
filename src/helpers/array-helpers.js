import _ from 'lodash';
import * as typeHelpers from '../helpers/type-helpers';

export const fillWithObjects = (initialArray, propertyName) => {
  return _.map(initialArray, function (prop, key) {
    var newObject = {};
    newObject[propertyName] = prop;
    return newObject;
  });
};

export const cloneProperty = (arrayOfObjects, fromProperty, newProperty, transformFunction) => {
  return _.map(arrayOfObjects, function (object) {
    object[newProperty] = transformFunction ? transformFunction(object[fromProperty]) : object[fromProperty];
    return object;
  });
};

// join two arrays with the possibility one of them to be undefined
export const joinAndCompact = (...arrays) => {
  return _.compact(Array.prototype.concat.apply([], arrays));
};

export const isArray = (obj) => {
  return typeHelpers.getType(obj) === 'array';
};

// if the array for pushing is undefined, return a new array with the item
export const pushToArray = (array, objectToPush) => {
  array = array || [];
  array.push(objectToPush);
  return array;
};

/**
 * @description Checks if the first array contains at least one of the parameters of the second array
 * @param {Array} arrToSearch
 * @param {Array} arrToFind
 * @returns {boolean}
 */

export const containsOne = (arrToSearch, arrToFind) => {
  return _.some(arrToFind, function (elem) {
    return arrToSearch.indexOf(elem) !== -1;
  });
};