/** @module String helpers */

import _ from 'lodash';
import * as typeHelper from '../helpers/type-helpers.js';
import replaceAll from 'underscore.string/replaceAll.js';
import trimSpaces from 'underscore.string/clean.js';
import btoa from 'btoa';
import atob from 'atob';

/**
 * @description Return a random string with an optional defined number of characters
 * @param {number} [numberOfCharacters=10]
 * @returns {string}
 */
export const randomString = (numberOfCharacters = 10) => { //get random string
  return Math.random().toString(36).substr(2, numberOfCharacters)
};

/**
 * @description Replaces all occurrences of an empty space with 'replace'
 * @param {string} string
 * @param {string} replace
 * @returns {string}
 */
export const replaceAllSpaces = (string, replace) => {
  return replaceAll(string, " ", replace || '');
};

/**
 * @description Return 'string' without the first 'num' characters
 * @param {string} string
 * @param {number} num Number of characters to remove from the beginning of the string
 * @returns {string}
 */
export const withoutFirst = (string, num) => {
  return string.substr(num, string.length - 1);
};
/**
 * @description Return 'string' without the last 'num' characters
 * @param {string} string
 * @param {number} num Number of characters to remove from the end of the string
 * @returns {string}
 */
export const withoutLast = (string, num) => {
  return string.substr(0, string.length - num);
};
/**
 * @description It encodes the string in base64 format
 * @param {string} str
 * @returns {string}
 */
export const encode = (str) => {
  return btoa(unescape(encodeURIComponent(str)));
};

/**
 * @description Decodes the string from base64 format
 * @param {string} str
 * @returns {string}
 */
export const decode = (str) => {
  return decodeURIComponent(escape(atob(str)));
};
/**
 * Checks if string a contains string b
 * @param {String} a
 * @param {String} b
 * @param {boolean} ignoreCase if the export const = should be case aware
 * @returns {boolean}
 */
export const contains = (a, b, ignoreCase) => {
  if (ignoreCase) {
    a = a.toLowerCase();
    b = b.toLowerCase();
  }
  if (typeHelper.matchTypes(b, "string", a, "string")) {
    return a.indexOf(b) !== -1;
  }
  return false;
};
/**
 * Replaces all empty spaces from string s with dashes
 * @param {String} string
 * @param {boolean} shouldTrimSpaces
 * @returns {string}
 */
export const dasherize = (string, shouldTrimSpaces) => {
  return replaceAll(shouldTrimSpaces ? trimSpaces(string) : string, " ", "-");
};
/**
 * Extracts just the image part from a base64 string
 * @param {String} base64string
 * @returns {String}
 */

export const getImageFromBase64String = (base64string) => {
  return base64string.replace(/.*,/, '');
};

/**
 * Converts the string from latinic to cyrilic using a map
 * @param {String} word
 * @returns {*|string}
 */
export const transliterate = (word) => {
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
  return _.map(word, (character) => {
      return characters[character] || character;
    }
  ).join('');
};

/**
 * Join string as lowercase
 * @param {String} string
 * @returns {string}
 */
export const joinLowercase = (string) => {
  return replaceAllSpaces(string).toLowerCase();
};

/**
 * Return a letter from the alphabet that's at "number" index
 * @param {number} number
 * @returns {string}
 */
export const getLetterFromNumber = number => {
  if (!_.isNumber(number)) {
    return;
  }
  const result = 'abcdefghijklmnopqrstuvwxyz'.charAt(number);
  return result === '' ? undefined : result;
}
