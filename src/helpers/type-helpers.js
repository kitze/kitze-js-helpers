var _ = require('lodash');
var numberHelpers = require('../helpers/number-helpers');

function getType(obj) {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
}

function matchTypes() {
  var objectsAndTypesArray = Array.prototype.slice.call(arguments);
  return _(objectsAndTypesArray).every(function (a, key) {
    return !numberHelpers.isEven(key) ? true : getType(a) === objectsAndTypesArray[key + 1]
  });
}


module.exports = {
  getType: getType,
  matchTypes: matchTypes
};