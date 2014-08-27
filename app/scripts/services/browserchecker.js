'use strict';

/**
 * @ngdoc service
 * @name ngApp.BrowserChecker
 * @description
 * # BrowserChecker
 * Factory in the ngApp.
 */
angular.module('ngApp')
  .factory('BrowserChecker', function BrowserChecker() {

    /**
     * List of mobile browsers
     * @type {RegExp}
     */
    var mobileBrowsers = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;

    /**
     * Determines if browser is mobile
     * @return {Boolean}
     */
    function isMobile() {
      return mobileBrowsers.test(navigator.userAgent);
    }

    /**
     * Determines if browser is touch friendly
     * @return {Boolean}
     */
    function isTouch() {
      return Modernizr.touch;
    }

    /**
     * Public methods
     */
    return {
      isMobile: isMobile,
      isTouch: isTouch
    };
  });
