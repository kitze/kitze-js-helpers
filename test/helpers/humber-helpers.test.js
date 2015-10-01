var expect = require('chai').expect;
var numberHelpers = require('../../src/helpers/number-helpers');

describe('number-helpers', function () {
  describe('isEven', function () {
    it('should check if the value is even', function () {
      expect(numberHelpers.isEven(2)).to.be.true;
      expect(numberHelpers.isEven(3)).to.be.false;
    })
  });
  describe('cycleValue', function () {
    it('should increase the value until the value is lower than max', function () {
      expect(numberHelpers.cycleValue(2, 3)).to.equal(3);
      expect(numberHelpers.cycleValue(2, 1)).to.equal(0);
    })
  });
  describe('cycleValueAround', function () {
    it('should increase the value, if the value gets bigger than max it should be zero, if it gets less then zero it should be max', function () {
      expect(numberHelpers.cycleValueAround(1, 1, 3)).to.equal(2);
      expect(numberHelpers.cycleValueAround(3, 1, 3)).to.equal(0);
      expect(numberHelpers.cycleValueAround(0, -1, 3)).to.equal(2);
    })
  });
});