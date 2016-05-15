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