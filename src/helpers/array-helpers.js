var _ = require('lodash');
var underscoreString = require('underscore.string');
var typeHelpers = require('../helpers/type-helpers');

function fillWithObjects(initialArray, propertyName) {
  return _.map(initialArray, function (key, prop) {
    var newObject = {};
    newObject[propertyName] = prop;
    return newObject;
  });
}

function cloneProperty(arrayOfObjects, newProperty, fromProperty, strFunction) {
  return _.map(arrayOfObjects, function (a) {
    a[newProperty] = underscoreString[strFunction](a[fromProperty]);
    return a;
  });
}

// join two arrays with the possibility one of them to be undefined
function joinAndCompact() {
  var arrays = Array.prototype.slice.call(arguments);
  return _.compact(Array.prototype.concat.apply([], arrays));
}

function isArray(obj) {
  return typeHelpers.getType(obj) === 'array';
}

// if the array for pushing is undefined, return a new array with the item
function pushToArray(array, objectToPush) {
  array = array || [];
  array.push(objectToPush);
  return array;
}

/**
 * @description Checks if the first array contains at least one of the parameters of the second array
 * @param {Array} arrToSearch
 * @param {Array} arrToFind
 * @returns {boolean}
 */

function containsOne(arrToSearch, arrToFind) {
  return _.some(arrToFind, function (elem) {
    return arrToSearch.indexOf(elem) !== -1;
  });
}

module.exports = {
  fillWithObjects: fillWithObjects,
  cloneProperty: cloneProperty,
  joinAndCompact: joinAndCompact,
  pushToArray: pushToArray,
  containsOne: containsOne
};