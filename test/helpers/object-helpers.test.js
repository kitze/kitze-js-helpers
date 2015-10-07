import {expect} from 'chai';
import * as objectHelpers from '../../src/helpers/object-helpers';

describe('objectHelpers', function () {
  describe('extendEach', function () {
    it('should extend each object in an array with a specific key and value', function () {
      var array = [
        {
          name: 'Kristijan'
        },
        {
          name: 'Tom'
        },
        {
          name: 'Dan'
        }
      ];

      var expectedArray = [
        {
          name: 'Kristijan',
          surname: 'Ristovski'
        },
        {
          name: 'Tom',
          surname: 'Ristovski'
        },
        {
          name: 'Dan',
          surname: 'Ristovski'
        }
      ];
      expect(objectHelpers.extendEach(array, 'surname', 'Ristovski')).to.eql(expectedArray);
    });
  });
  describe('merge', function () {
    it('should merge two objects with the possibility of one of them being undefined', function () {
      expect(objectHelpers.merge(undefined, {name: 'kitze'})).to.eql({name: 'kitze'});
      expect(objectHelpers.merge({name: 'kitze'}, undefined)).to.eql({name: 'kitze'});
      expect(objectHelpers.merge({surname: 'ristovski'}, {name: 'kitze'})).to.eql({
        name: 'kitze',
        surname: 'ristovski'
      });
    });
  });
  describe('isObject', function () {
    it('should check if the first argument is an object', function () {
      expect(objectHelpers.isObject({})).to.be.true;
      expect(objectHelpers.isObject([1, 2, 3])).to.be.false;
      expect(objectHelpers.isObject('string')).to.be.false;
      expect(objectHelpers.isObject(123)).to.be.false;
    });
  });
});