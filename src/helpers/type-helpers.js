import _ from 'lodash';
import * as numberHelpers from '../helpers/number-helpers';

export const getType = (obj) => {
  return ({}).toString.call(obj).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
};

export const matchTypes = (...objectsAndTypesArray) => {
  return _(objectsAndTypesArray).every(function (a, key) {
    return !numberHelpers.isEven(key) ? true : getType(a) === objectsAndTypesArray[key + 1]
  });
};