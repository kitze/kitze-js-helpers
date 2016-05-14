import {expect} from 'chai';
import * as mobileHelpers from '../../src/helpers/mobile-helpers';

describe('mobileHelpers', function () {
  describe('getIcon', function () {
    it('generate a config object for a mobile app icon', function () {

      const path = '../../mobile-config/';
      const prefix = 'android';
      const rel = 'rel';
      const size = 25;

      const result = {
        rel: 'rel',
        href: '../../mobile-config/android-25x25.png',
        type: 'image/png',
        sizes: '25x25'
      };

      const resultWithoutSize = {
        rel: 'rel',
        href: '../../mobile-config/android.png',
        type: 'image/png'
      };

      expect(mobileHelpers.getIcon(path, prefix, rel, size)).to.eql(result);
      expect(mobileHelpers.getIcon(path, prefix, rel)).to.eql(resultWithoutSize);
    });
  });

  describe('getIcons', function () {
    it('gets an array of generated config objects for mobile app icons with different app size', function () {

      const path = '../../mobile-config/';
      const prefix = 'android';
      const rel = 'rel';
      const sizes = [25, 32];

      const result = [
        {
          rel: 'rel',
          href: '../../mobile-config/android-25x25.png',
          type: 'image/png',
          sizes: '25x25'
        },
        {
          rel: 'rel',
          href: '../../mobile-config/android-32x32.png',
          type: 'image/png',
          sizes: '32x32'
        }
      ];

      expect(mobileHelpers.getIcons(path, prefix, rel, sizes)).to.eql(result);
      expect(mobileHelpers.getIcons(path, prefix, rel)).to.not.exist;
    });
  });
});