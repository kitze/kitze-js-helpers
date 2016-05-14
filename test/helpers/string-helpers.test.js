import {expect} from 'chai';
import * as stringHelpers from '../../src/helpers/string-helpers';

describe('stringHelpers', function () {
  describe('randomString', function () {
    it('should return a random string with an optional defined number of characters', function () {
      expect(stringHelpers.randomString(5)).to.have.length(5);
      expect(stringHelpers.randomString(3)).to.have.length(3);
      expect(stringHelpers.randomString()).to.have.length(10);
    });
  });
  describe('replaceAllSpaces', function () {
    it('should replace all occurrences of an empty space', function () {
      expect(stringHelpers.replaceAllSpaces(' kitze   rocks ')).to.equal('kitzerocks');
      expect(stringHelpers.replaceAllSpaces('   something else')).to.equal('somethingelse');
      expect(stringHelpers.replaceAllSpaces('cool string')).to.equal('coolstring');
    });
  });
  describe('withoutFirst', function () {
    it('should return the string without the first X characters', function () {
      expect(stringHelpers.withoutFirst('australia', 3)).to.equal('tralia');
      expect(stringHelpers.withoutFirst('zombies', 4)).to.equal('ies');
      expect(stringHelpers.withoutFirst('kitze', 5)).to.equal('');
    });
  });
  describe('withoutLast', function () {
    it('should return the string without the first X characters', function () {
      expect(stringHelpers.withoutLast('australia', 3)).to.equal('austra');
      expect(stringHelpers.withoutLast('zombies', 4)).to.equal('zom');
      expect(stringHelpers.withoutLast('kitze', 5)).to.equal('');
    });
  });

  /* Encode / Decode */
  var decoded = 'australopithecus';
  var encoded = 'YXVzdHJhbG9waXRoZWN1cw==';

  describe('encode', function () {
    it('should return a string that\'s unescaped and encoded', function () {
      expect(stringHelpers.encode(decoded)).to.equal(encoded);
    })
  });
  describe('decode', function () {
    it('should return a string that\'s escaped and decoded', function () {
      expect(stringHelpers.decode(encoded)).to.equal(decoded);
    })
  });
  describe('contains', function () {
    it('should check if string A contains string B (with an optional argument to ignore case)', function () {
      expect(stringHelpers.contains("kitze", "ze")).to.be.true;
      expect(stringHelpers.contains("kitze", "zero")).to.be.false;
      expect(stringHelpers.contains("KiTzE", "ZE", true)).to.be.true;
      expect(stringHelpers.contains("KiTzE", "ZeRo", true)).to.be.false;
      expect(stringHelpers.contains("kitze", [1, 2, 3])).to.be.false;
    });
  });
  describe('dasherize', function () {
    it('should replace all empty spaces from the string with dashes with an optional argument to trim spaces first', function () {
      expect(stringHelpers.dasherize("this library is cool")).to.be.equal('this-library-is-cool');
      expect(stringHelpers.dasherize("this   library   is   cool")).to.be.equal('this---library---is---cool');
      expect(stringHelpers.dasherize("this   library   is   cool", true)).to.be.equal('this-library-is-cool');
    });
  });
  describe('getImageFromBase64String', function () {
    it('should remove the `data:image/png;base64,` part of an base64 image represented as a string', function () {
      var b64image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAACTYAAAVeCAYAAABBl';
      expect(stringHelpers.getImageFromBase64String(b64image)).to.equal('iVBORw0KGgoAAAANSUhEUgAACTYAAAVeCAYAAABBl');
    })
  });
  describe('transliterate', function () {
    it('should convert a string from latinic to cyrilic', function () {
      expect(stringHelpers.transliterate('китзе')).to.equal('kitze');
      expect(stringHelpers.transliterate('ОЏАК')).to.equal('ODZAK');
      expect(stringHelpers.transliterate('ОЏАК')).to.equal('ODZAK');
      expect(stringHelpers.transliterate('хåкер')).to.equal('håker');
      expect(stringHelpers.transliterate('оториноларингологија')).to.equal('otorinolaringologija');
      expect(stringHelpers.transliterate('АБВГДЃЕЖЗSИЈКЛЉМНЊОПРСТЌУФХЦЧЏШ')).to.equal('ABVGDGJEZHZDZIJKLLJMNNJOPRSTKJUFHTSCHDZSH');
      expect(stringHelpers.transliterate('абвгдѓежзѕијклљмнњопрстќуфхцчџш')).to.equal('abvgdgjezhzdzijklljmnnjoprstkjufhtschdzsh');
    });
  });
  describe('joinLowercase', function () {
    it('should remove the spaces from a string and convert it to lowercase', function () {
      expect(stringHelpers.joinLowercase('THIS LIBRARY iS gReAt')).to.equal('thislibraryisgreat');
      expect(stringHelpers.joinLowercase('  THIS   LIBrArY iS    GREAT   ')).to.equal('thislibraryisgreat');
    });
  });
  describe('getLetterFromNumber', function () {
    it('Return a letter from the alphabet that\'s at "number" index', function () {
      expect(stringHelpers.getLetterFromNumber(0)).to.equal('a');
      expect(stringHelpers.getLetterFromNumber(7)).to.equal('h');
      expect(stringHelpers.getLetterFromNumber(135)).to.not.exist;
      expect(stringHelpers.getLetterFromNumber(-1)).to.not.exist;
      expect(stringHelpers.getLetterFromNumber("maosadg")).to.not.exist;
      expect(stringHelpers.getLetterFromNumber([])).to.not.exist;
      expect(stringHelpers.getLetterFromNumber({})).to.not.exist;
    });
  });
});