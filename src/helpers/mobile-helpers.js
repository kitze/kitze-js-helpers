/** @module Mobile helpers */

/**
 * @description Generates a config object for a mobile app icon
 * @param {string} path
 * @param {string} prefix
 * @param {string} rel
 * @param {number} [size]
 * @returns {object}
 */
export const getIcon = (path, prefix, rel, size) => {
  const sizeString = size ? `${size}x${size}` : '';
  return {
    rel: rel,
    href: `${path}${prefix}${size ? ('-' + sizeString) : ''}.png`,
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
 * @param {number} size
 * @returns {array}
 */
export const getIcons = (path, prefix, rel, sizes) => sizes !== undefined && sizes.length > 0 ? sizes.map(size => getIcon(path, prefix, rel, size)) : undefined;