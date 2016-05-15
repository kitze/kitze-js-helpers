/** @module Webpack helpers */

/**
 * @description Require all keys from a context
 */
/* istanbul ignore next */
export const requireAll = (requireContext) => {
  return requireContext.keys().map(requireContext);
}