(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.kjs = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

},{}],2:[function(require,module,exports){
var trim = require('./trim');

module.exports = function clean(str) {
  return trim(str).replace(/\s\s+/g, ' ');
};

},{"./trim":7}],3:[function(require,module,exports){
var escapeRegExp = require('./escapeRegExp');

module.exports = function defaultToWhiteSpace(characters) {
  if (characters == null)
    return '\\s';
  else if (characters.source)
    return characters.source;
  else
    return '[' + escapeRegExp(characters) + ']';
};

},{"./escapeRegExp":4}],4:[function(require,module,exports){
var makeString = require('./makeString');

module.exports = function escapeRegExp(str) {
  return makeString(str).replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1');
};

},{"./makeString":5}],5:[function(require,module,exports){
/**
 * Ensure some object is a coerced to a string
 **/
module.exports = function makeString(object) {
  if (object == null) return '';
  return '' + object;
};

},{}],6:[function(require,module,exports){
var makeString = require('./helper/makeString');

module.exports = function replaceAll(str, find, replace, ignorecase) {
  var flags = (ignorecase === true)?'gi':'g';
  var reg = new RegExp(find, flags);

  return makeString(str).replace(reg, replace);
};

},{"./helper/makeString":5}],7:[function(require,module,exports){
var makeString = require('./helper/makeString');
var defaultToWhiteSpace = require('./helper/defaultToWhiteSpace');
var nativeTrim = String.prototype.trim;

module.exports = function trim(str, characters) {
  str = makeString(str);
  if (!characters && nativeTrim) return nativeTrim.call(str);
  characters = defaultToWhiteSpace(characters);
  return str.replace(new RegExp('^' + characters + '+|' + characters + '+$', 'g'), '');
};

},{"./helper/defaultToWhiteSpace":3,"./helper/makeString":5}],8:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodash = (typeof window !== "undefined" ? window['_'] : typeof global !== "undefined" ? global['_'] : null);

var _lodash2 = _interopRequireDefault(_lodash);

var _helpersTypeHelpers = require('../helpers/type-helpers');

var typeHelpers = _interopRequireWildcard(_helpersTypeHelpers);

var fillWithObjects = function fillWithObjects(initialArray, propertyName) {
  return _lodash2['default'].map(initialArray, function (prop) {
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
},{"../helpers/type-helpers":12}],9:[function(require,module,exports){
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

},{}],10:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

var _helpersTypeHelpersJs = require('../helpers/type-helpers.js');

var typeHelpers = _interopRequireWildcard(_helpersTypeHelpersJs);

var _lodash = (typeof window !== "undefined" ? window['_'] : typeof global !== "undefined" ? global['_'] : null);

var _lodash2 = _interopRequireDefault(_lodash);

/**
 * @description Extend each object in array with a specific key and value.
 * @example
 * extendEach([{name:'Kristijan'}, {name:'Martin'}], 'surname', 'some new surname');
 * @param {Array} array
 * @param {String} key
 * @param {String} value
 * @returns {Array} _.map of the array with inserted key:value into each array member
 */
var extendEach = function extendEach(array, key, value) {
  return _lodash2['default'].map(array, function (object) {
    object[key] = value;
    return object;
  });
};
exports.extendEach = extendEach;
/**
 * @description Merge first object with the second object, but if the first object is undefined, return the second object
 * @param {Object} object1
 * @param {Object} object2
 * @returns {Object}
 */
var merge = function merge(object1, object2) {
  return object1 === undefined ? object2 : _lodash2['default'].extend(object1, object2);
};
exports.merge = merge;
/**
 * @description
 * Check if obj is an object, but because _.isObject() returns true for arrays too,
 * check if the object also doesn't have the 'length' property, so it returns true only for objects and not arrays
 * @param object
 * @returns {boolean}
 */

var isObject = function isObject(object) {
  return typeHelpers.getType(object) === "object";
};
exports.isObject = isObject;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../helpers/type-helpers.js":12}],11:[function(require,module,exports){
(function (global){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj['default'] = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _lodash = (typeof window !== "undefined" ? window['_'] : typeof global !== "undefined" ? global['_'] : null);

var _lodash2 = _interopRequireDefault(_lodash);

var _helpersTypeHelpersJs = require('../helpers/type-helpers.js');

var typeHelper = _interopRequireWildcard(_helpersTypeHelpersJs);

var _underscoreStringReplaceAllJs = require('underscore.string/replaceAll.js');

var _underscoreStringReplaceAllJs2 = _interopRequireDefault(_underscoreStringReplaceAllJs);

var _underscoreStringCleanJs = require('underscore.string/clean.js');

var _underscoreStringCleanJs2 = _interopRequireDefault(_underscoreStringCleanJs);

var _btoa = require('btoa');

var _btoa2 = _interopRequireDefault(_btoa);

var _atob = require('atob');

var _atob2 = _interopRequireDefault(_atob);

/**
 * @description Return a random string with an optional defined number of characters
 * @param {number} [numberOfCharacters=10]
 * @returns {string}
 */
var randomString = function randomString(numberOfCharacters) {
  //get random string
  var s = '';
  var randomchar = function randomchar() {
    var n = Math.floor(Math.random() * 62);
    if (n < 10) return n; //1-10
    if (n < 36) return String.fromCharCode(n + 55); //A-Z
    return String.fromCharCode(n + 61); //a-z
  };
  while (s.length < (numberOfCharacters === undefined ? 10 : numberOfCharacters)) s += randomchar();
  return s;
};

exports.randomString = randomString;
/**
 * @description Replaces all occurrences of an empty space with 'replace'
 * @param {string} string
 * @param {string} replace
 * @returns {string}
 */
var replaceAllSpaces = function replaceAllSpaces(string, replace) {
  return (0, _underscoreStringReplaceAllJs2['default'])(string, " ", replace || '');
};

exports.replaceAllSpaces = replaceAllSpaces;
/**
 * @description Return 'string' without the first 'num' characters
 * @param {string} string
 * @param {number} num Number of characters to remove from the beginning of the string
 * @returns {string}
 */
var withoutFirst = function withoutFirst(string, num) {
  return string.substr(num, string.length - 1);
};
exports.withoutFirst = withoutFirst;
/**
 * @description Return 'string' without the last 'num' characters
 * @param {string} string
 * @param {number} num Number of characters to remove from the end of the string
 * @returns {string}
 */
var withoutLast = function withoutLast(string, num) {
  return string.substr(0, string.length - num);
};
exports.withoutLast = withoutLast;
/**
 * @description It encodes the string in base64 format
 * @param {string} str
 * @returns {string}
 */
var encode = function encode(str) {
  return (0, _btoa2['default'])(unescape(encodeURIComponent(str)));
};

exports.encode = encode;
/**
 * @description Decodes the string from base64 format
 * @param {string} str
 * @returns {string}
 */
var decode = function decode(str) {
  return decodeURIComponent(escape((0, _atob2['default'])(str)));
};
exports.decode = decode;
/**
 * Checks if string a contains string b
 * @param {String} a
 * @param {String} b
 * @param {boolean} ignoreCase if the export const = should be case aware
 * @returns {boolean}
 */
var contains = function contains(a, b, ignoreCase) {
  if (ignoreCase) {
    a = a.toLowerCase();
    b = b.toLowerCase();
  }
  if (typeHelper.matchTypes(b, "string", a, "string")) {
    return a.indexOf(b) !== -1;
  }
  return false;
};
exports.contains = contains;
/**
 * Replaces all empty spaces from string s with dashes
 * @param {String} string
 * @param {boolean} shouldTrimSpaces
 * @returns {string}
 */
var dasherize = function dasherize(string, shouldTrimSpaces) {
  return (0, _underscoreStringReplaceAllJs2['default'])(shouldTrimSpaces ? (0, _underscoreStringCleanJs2['default'])(string) : string, " ", "-");
};
exports.dasherize = dasherize;
/**
 * Extracts just the image part from a base64 string
 * @param {String} base64string
 * @returns {String}
 */

var getImageFromBase64String = function getImageFromBase64String(base64string) {
  return base64string.replace(/.*,/, '');
};

exports.getImageFromBase64String = getImageFromBase64String;
/**
 * Converts the string from latinic to cyrilic using a map
 * @param {String} word
 * @returns {*|string}
 */
var transliterate = function transliterate(word) {
  var characters = {
    "Ѓ": "GJ",
    "S": "DZ",
    "И": "I",
    "Ј": "J",
    "Љ": "LJ",
    "Њ": "NJ",
    "Ќ": "KJ",
    "У": "U",
    "Џ": "DZ",
    "ѓ": "gj",
    "ѕ": "dz",
    "и": "i",
    "ј": "j",
    "љ": "lj",
    "њ": "nj",
    "ќ": "kj",
    "џ": "dz",
    "Ц": "TS",
    "К": "K",
    "Е": "E",
    "Н": "N",
    "Г": "G",
    "Ш": "SH",
    "З": "Z",
    "Х": "H",
    "ц": "ts",
    "у": "u",
    "к": "k",
    "е": "e",
    "н": "n",
    "г": "g",
    "ш": "sh",
    "з": "z",
    "х": "h",
    "Ф": "F",
    "В": "V",
    "А": "A",
    "П": "P",
    "Р": "R",
    "О": "O",
    "Л": "L",
    "Д": "D",
    "Ж": "ZH",
    "ф": "f",
    "в": "v",
    "а": "a",
    "п": "p",
    "р": "r",
    "о": "o",
    "л": "l",
    "д": "d",
    "ж": "zh",
    "Ч": "CH",
    "С": "S",
    "М": "M",
    "Т": "T",
    "Б": "B",
    "ч": "ch",
    "с": "s",
    "м": "m",
    "т": "t",
    "б": "b"
  };
  return _lodash2['default'].map(word, function (character) {
    return characters[character] || character;
  }).join('');
};
exports.transliterate = transliterate;
/**
 * Join string as lowercase
 * @param {String} string
 * @returns {string}
 */
var joinLowercase = function joinLowercase(string) {
  return replaceAllSpaces(string).toLowerCase();
};
exports.joinLowercase = joinLowercase;

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"../helpers/type-helpers.js":12,"atob":1,"btoa":1,"underscore.string/clean.js":2,"underscore.string/replaceAll.js":6}],12:[function(require,module,exports){
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
},{"../helpers/number-helpers":9}],13:[function(require,module,exports){
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

var _helpersStringHelpers = require('./helpers/string-helpers');

var stringHelpers = _interopRequireWildcard(_helpersStringHelpers);

var _helpersObjectHelpers = require('./helpers/object-helpers');

var objectHelpers = _interopRequireWildcard(_helpersObjectHelpers);

exports['default'] = {
  num: numberHelpers,
  type: typeHelpers,
  str: stringHelpers,
  obj: objectHelpers
};
module.exports = exports['default'];

},{"./helpers/array-helpers":8,"./helpers/number-helpers":9,"./helpers/object-helpers":10,"./helpers/string-helpers":11,"./helpers/type-helpers":12}]},{},[13])(13)
});