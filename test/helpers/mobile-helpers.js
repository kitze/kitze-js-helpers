import {expect} from 'chai';
import * as mobileHelpers from '../../src/helpers/mobile-helpers';
import {webpackIconModules, iconResults} from '../data/webpack-icon-modules';

const iconsMap = [
  {
    name: './android-25x25.png',
    module: 123
  },
  {
    name: './android-32x32.png',
    module: 456
  }
];

describe('mobileHelpers', function () {
  describe('getIcon', function () {
    it('generate a config object for a mobile app icon', function () {

      const path = './';
      const prefix = 'android';
      const rel = 'rel';
      const size = 25;

      const result = {
        rel: 'rel',
        href: 123,
        type: 'image/png',
        sizes: '25x25'
      };

      const resultWithoutSize = {
        rel: 'rel',
        href: undefined,
        type: 'image/png'
      };

      expect(mobileHelpers.getIcon(path, prefix, rel, iconsMap, size)).to.eql(result);
      expect(mobileHelpers.getIcon(path, prefix, rel, iconsMap)).to.eql(resultWithoutSize);
    });
  });

  describe('getIcons', function () {
    it('gets an array of generated config objects for mobile app icons with different app size', function () {

      const path = './';
      const prefix = 'android';
      const rel = 'rel';
      const sizes = [25, 32];

      const result = [
        {
          rel: 'rel',
          href: 123,
          type: 'image/png',
          sizes: '25x25'
        },
        {
          rel: 'rel',
          href: 456,
          type: 'image/png',
          sizes: '32x32'
        }
      ];

      expect(mobileHelpers.getIcons(path, prefix, rel, iconsMap, sizes)).to.eql(result);
      expect(mobileHelpers.getIcons(path, prefix, rel, iconsMap)).to.not.exist;
    });
  });

  describe('getIcons', function () {
    it('Provided an iconsPrefix and an iconsMap it should return the configuration for all the favicons', function () {
      expect(mobileHelpers.getDefaultFavicons('./', webpackIconModules)).to.eql(iconResults);
    });
  });
});