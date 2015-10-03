import {expect} from 'chai';
import * as arrayHelpers from '../../src/helpers/array-helpers';

describe('arrayHelpers', function () {
  describe('fillWithObjects', function () {
    it('should map the array and return objects with a property name and the value of each array member', function () {
      var array = ['titanic', 'gone girl', 'hunger games'];
      var resultArray = [
        {
          'movie': 'titanic'
        },
        {
          'movie': 'gone girl'
        },
        {
          'movie': 'hunger games'
        }
      ];
      expect(arrayHelpers.fillWithObjects(array, 'movie')).to.eql(resultArray);
    });
  });
  describe('cloneProperty', function () {
    it('should map an array of objects, take one property, clone it as another one and transform it', function () {
      var arrayOfObjects = [
        {
          'name': 'kitze'
        },
        {
          'name': 'donald'
        },
        {
          'name': 'ron'
        }
      ];
      var resultArray = [
        {
          'name': 'kitze',
          'surname': 'kitze'
        },
        {
          'name': 'donald',
          'surname': 'donald'
        },
        {
          'name': 'ron',
          'surname': 'ron'
        }
      ];
      var resultArrayWithTrasnform = [
        {
          'name': 'kitze',
          'surname': 'KITZE'
        },
        {
          'name': 'donald',
          'surname': 'DONALD'
        },
        {
          'name': 'ron',
          'surname': 'RON'
        }
      ];
      expect(arrayHelpers.cloneProperty(arrayOfObjects, 'name', 'surname')).to.eql(resultArray);
      expect(arrayHelpers.cloneProperty(arrayOfObjects, 'name', 'surname', function (property) {
        return property.toUpperCase()
      })).to.eql(resultArrayWithTrasnform);
    });
  });
  describe('joinAndCompact', function () {
    it('should join arrays with compact but remove undefined and null arguments', function () {
      expect(arrayHelpers.joinAndCompact([1, 2, 3], [4, 5, 6])).to.eql([1, 2, 3, 4, 5, 6]);
      expect(arrayHelpers.joinAndCompact([1, 2, 3], null, [4, 5, 6], undefined, null)).to.eql([1, 2, 3, 4, 5, 6]);
    });
  });
  describe('isArray', function () {
    it('should check if the argument is an array', function () {
      expect(arrayHelpers.isArray([1, 2, 3])).to.be.true;
      expect(arrayHelpers.isArray(0)).to.be.false;
      expect(arrayHelpers.isArray({})).to.be.false;
      expect(arrayHelpers.isArray('string')).to.be.false;
    })
  });
  describe('pushToArray', function () {
    it('should push an object to an array but if the array is undefined it should initialize it', function () {
      expect(arrayHelpers.pushToArray([1, 2, 3], 4)).to.eql([1, 2, 3, 4]);
      expect(arrayHelpers.pushToArray(undefined, 4)).to.eql([4]);
    });
  });
  describe('containsOne', function () {
    it('should check if the first array contains at least one of the parameters of the second array', function () {
      expect(arrayHelpers.containsOne([1, 2, 3], [1, 2])).to.be.true;
      expect(arrayHelpers.containsOne([1, 2, 3], [1])).to.be.true;
      expect(arrayHelpers.containsOne([1, 2, 3], [])).to.be.false;
      expect(arrayHelpers.containsOne([1, 2, 3], [0])).to.be.false;
    });
  });
});