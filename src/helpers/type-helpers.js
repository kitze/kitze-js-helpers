var _ = require('lodash');
var numberHelpers = require('../helpers/number-helpers');

function getType(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

function matchTypes(arr) {
  return _(arr).every(function (a, key) {
    return !numberHelpers.isEven(key) ? true : getType(a) === arr[key + 1]
  });
}

module.exports = {
  getType: getType,
  matchTypes: matchTypes
};