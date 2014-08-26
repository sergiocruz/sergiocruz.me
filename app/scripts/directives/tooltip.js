'use strict';

/**
 * @ngdoc directive
 * @name ngApp.directive:tooltip
 * @description
 * # tooltip
 */
angular.module('ngApp')
  .directive('tooltip', function () {
    return {
      restrict: 'EA',
      link: function postLink(scope, element) {
        element.tooltip({
          animation: true
        });
      }
    };
  });
