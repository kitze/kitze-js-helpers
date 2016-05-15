/** @module Mobile helpers */
import _ from 'lodash';

/**
 * @description Generates a config object for a mobile app icon
 * @param {string} path
 * @param {string} prefix
 * @param {string} rel
 * @param {Array} iconsMap
 * @param {number} [size]
 * @returns {object}
 */
export const getIcon = (path, prefix, rel, iconsMap, size) => {
  const sizeString = size ? `${size}x${size}` : '';
  const foundPath = `${path}${prefix}${size ? ('-' + sizeString) : ''}.png`;
  const foundResult = _.find(iconsMap, icon => icon.name === foundPath);

  return {
    rel: rel,
    href: foundResult ? foundResult.module : undefined,
    type: "image/png",
    ...size && {
      sizes: sizeString
    }
  }
}

/**
 * Gets an array of generated config objects for mobile app icons with different app size
 * @param {string} path
 * @param {string} prefix
 * @param {string} rel
 * @param {Array} iconsMap
 * @param {Array} [sizes]
 * @returns {array}
 */
export const getIcons = (path, prefix, rel, iconsMap, sizes) => sizes !== undefined && sizes.length > 0 ? sizes.map(size => getIcon(path, prefix, rel, iconsMap, size)) : undefined;

/**
 * @description Provided an iconsPrefix and an iconsMap it should return the configuration for all the favicons
 * @param {String} iconsPrefix
 * @param {Array} iconsMap
 * @returns {{appleIcons: array, favicons: array, defaultAppleIcon: {rel, href, type}}}
 */
export const getDefaultFavicons = (iconsPrefix, iconsMap) => {
  return {
    appleIcons: getIcons(iconsPrefix, 'apple-icon', 'apple-touch-icon', iconsMap, [57, 60, 72, 76, 114, 120, 144, 152, 180]),
    favicons: getIcons(iconsPrefix, 'favicon', 'icon', iconsMap, [16, 32, 96]),
    defaultAppleIcon: getIcon(iconsPrefix, 'apple-icon', 'apple-touch-icon', iconsMap)
  }
}