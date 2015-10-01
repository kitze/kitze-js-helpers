var expect = require('chai').expect;
var typeHelpers = require('../../src/helpers/type-helpers');

describe('typeHelpers', function () {
  describe('getType', function () {
    it('returns the type of the object', function () {
      expect(typeHelpers.getType(2)).to.equal('number');
      expect(typeHelpers.getType([1, 2, 3])).to.equal('array');
      expect(typeHelpers.getType({})).to.equal('object');
      expect(typeHelpers.getType('kitze')).to.equal('string');
    });
  });
  describe('matchTypes', function () {
    it('checks if the arguments provided are of the correct type', function () {
      expect(typeHelpers.matchTypes('kitze', 'string')).to.be.true;
      expect(typeHelpers.matchTypes(123, 'number')).to.be.true;
      expect(typeHelpers.matchTypes([1, 2, 3], 'array', 'kitze', 'string')).to.be.true;
      expect(typeHelpers.matchTypes([1, 2, 3], 'array', 'kitze', 'number')).to.be.false;
      expect(typeHelpers.matchTypes(23, 'array', 'kitze', 'number')).to.be.false;
    })
  });
});