(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

},{}],2:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodash = (typeof window !== "undefined" ? window['_'] : typeof global !== "undefined" ? global['_'] : null);

var _lodash2 = _interopRequireDefault(_lodash);

var _underscoreString = require('underscore.string');

var _underscoreString2 = _interopRequireDefault(_underscoreString);

var _helpersTypeHelpers = require('../helpers/type-helpers');

var typeHelpers = _interopRequireWildcard(_helpersTypeHelpers);

var fillWithObjects = function fillWithObjects(initialArray, propertyName) {
  return _lodash2['default'].map(initialArray, function (prop, key) {
    var newObject = {};
    newObject[propertyName] = prop;
    return newObject;
  });
};

exports.fillWithObjects = fillWithObjects;
var cloneProperty = function cloneProperty(arrayOfObjects, fromProperty, newProperty, transformFunction) {
  return _lodash2['default'].map(arrayOfObjects, function (object) {
    object[newProperty] = transformFunction ? transformFunction(object[fromProperty]) : object[fromProperty];
    return object;
  });
};

exports.cloneProperty = cloneProperty;
// join two arrays with the possibility one of them to be undefined
var joinAndCompact = function joinAndCompact() {
  for (var _len = arguments.length, arrays = Array(_len), _key = 0; _key < _len; _key++) {
    arrays[_key] = arguments[_key];
  }

  return _lodash2['default'].compact(Array.prototype.concat.apply([], arrays));
};

exports.joinAndCompact = joinAndCompact;
var isArray = function isArray(obj) {
  return typeHelpers.getType(obj) === 'array';
};

exports.isArray = isArray;
// if the array for pushing is undefined, return a new array with the item
var pushToArray = function pushToArray(array, objectToPush) {
  array = array || [];
  array.push(objectToPush);
  return array;
};

exports.pushToArray = pushToArray;
/**
 * @description Checks if the first array contains at least one of the parameters of the second array
 * @param {Array} arrToSearch
 * @param {Array} arrToFind
 * @returns {boolean}
 */

var containsOne = function containsOne(arrToSearch, arrToFind) {
  return _lodash2['default'].some(arrToFind, function (elem) {
    return arrToSearch.indexOf(elem) !== -1;
  });
};
exports.containsOne = containsOne;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../helpers/type-helpers":4,"underscore.string":1}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var cycleValue = function cycleValue(current, max) {
  current++;
  if (current > max) {
    current = 0;
  }
  return current;
};

exports.cycleValue = cycleValue;
var cycleValueAround = function cycleValueAround(current, increase, max) {
  current = current + increase;
  if (current >= max) {
    current = 0;
  } else if (current === -1) {
    current = max - 1;
  }
  return current;
};

exports.cycleValueAround = cycleValueAround;
var isEven = function isEven(num) {
  return num % 2 === 0;
};
exports.isEven = isEven;

},{}],4:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodash = (typeof window !== "undefined" ? window['_'] : typeof global !== "undefined" ? global['_'] : null);

var _lodash2 = _interopRequireDefault(_lodash);

var _helpersNumberHelpers = require('../helpers/number-helpers');

var numberHelpers = _interopRequireWildcard(_helpersNumberHelpers);

var getType = function getType(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
};

exports.getType = getType;
var matchTypes = function matchTypes() {
  for (var _len = arguments.length, objectsAndTypesArray = Array(_len), _key = 0; _key < _len; _key++) {
    objectsAndTypesArray[_key] = arguments[_key];
  }

  return (0, _lodash2['default'])(objectsAndTypesArray).every(function (a, key) {
    return !numberHelpers.isEven(key) ? true : getType(a) === objectsAndTypesArray[key + 1];
  });
};
exports.matchTypes = matchTypes;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../helpers/number-helpers":3}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _helpersNumberHelpers = require('./helpers/number-helpers');

var numberHelpers = _interopRequireWildcard(_helpersNumberHelpers);

var _helpersTypeHelpers = require('./helpers/type-helpers');

var typeHelpers = _interopRequireWildcard(_helpersTypeHelpers);

var _helpersArrayHelpers = require('./helpers/array-helpers');

var arrayHelpers = _interopRequireWildcard(_helpersArrayHelpers);

exports['default'] = {
  num: numberHelpers,
  type: typeHelpers,
  arr: arrayHelpers
};
module.exports = exports['default'];

},{"./helpers/array-helpers":2,"./helpers/number-helpers":3,"./helpers/type-helpers":4}]},{},[5]);
