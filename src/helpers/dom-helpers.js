/**
 * @description Simple hack for changing scrollTop on mobile, otherwise the page doesn't scroll
 */
/* istanbul ignore next */
export const mobileScrollTo = (element, scrollPosition) => {
  element.css('overflow-y', 'hidden');
  element.scrollTop(scrollPosition)
  element.css('overflow-y', 'auto');
}