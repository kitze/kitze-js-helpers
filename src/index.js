import * as numberHelpers from './helpers/number-helpers';
import * as typeHelpers from './helpers/type-helpers';
import * as arrayHelpers from './helpers/array-helpers';
import * as stringHelpers from './helpers/string-helpers';
import * as objectHelpers from './helpers/object-helpers';
import * as browserHelpers from './helpers/browser-helpers';
import * as mobileHelpers from './helpers/mobile-helpers';
import * as webpackHelpers from './helpers/dom-helpers';
import * as domHelpers from './helpers/dom-helpers';

export default {
  num: numberHelpers,
  type: typeHelpers,
  str: stringHelpers,
  obj: objectHelpers,
  arr: arrayHelpers,
  browser: browserHelpers,
  dom: domHelpers,
  mobile: mobileHelpers,
  webpack: webpackHelpers
};