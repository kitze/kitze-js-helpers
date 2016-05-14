/**
 * @description Check if the website is running as a standalone app (pinned to screen)
 */
/* istanbul ignore next */
export const isRunningStandalone = () => window.matchMedia('(display-mode: standalone)').matches;

/**
 * @description Check if the browser is Safari
 */
/* istanbul ignore next */
export const isBrowserSafari = () => {
  return typeof window.navigator !== 'undefined' && /Version\/[\d\.]+.*Safari/.test(window.navigator.userAgent);
}