/**
 * rkgttr-consolepolyfill
 *
 * Copyright © 2016 Erik Guittiere. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

export const consolePolyfill = (() => {
  let method,
    noop = () => {},
    methods = [
      'assert',
      'clear',
      'count',
      'debug',
      'dir',
      'dirxml',
      'error',
      'exception',
      'group',
      'groupCollapsed',
      'groupEnd',
      'info',
      'log',
      'markTimeline',
      'profile',
      'profileEnd',
      'table',
      'time',
      'timeEnd',
      'timeStamp',
      'trace',
      'warn'
    ],
    length = methods.length,
    console = window.console = window.console || {};

  while (length--) {
    method = methods[length];
    if (!console[method]) {
      console[method] = noop;
    }
  }
})();

export {consolePolyfill as default};
