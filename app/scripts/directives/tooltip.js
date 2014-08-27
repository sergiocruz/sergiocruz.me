'use strict';

/**
 * @ngdoc directive
 * @name ngApp.directive:tooltip
 * @description
 * # tooltip
 */
angular.module('ngApp')
  .directive('tooltip', function tooltip(BrowserChecker) {
    return {
      restrict: 'EA',
      link: function postLink(scope, element) {

        // Does not bind in mobile
        if (BrowserChecker.isMobile() || BrowserChecker.isTouch()) {
          return;
        }

        // jQuery binds bootstrap tooltip
        element.tooltip({
          animation: true
        });
      }
    };
  });
