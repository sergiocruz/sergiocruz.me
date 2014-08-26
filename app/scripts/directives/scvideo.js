'use strict';

/**
 * @ngdoc directive
 * @name ngApp.directive:video
 * @description
 * # video
 */
angular.module('ngApp')
  .directive('scVideo', function () {
    return {
      scope: {
        src: '@'
      },
      templateUrl: '/views/directives/scvideo.html',
      restrict: 'A',
      replace: true,
      link: function postLink() {},
      compile: function(tElement, tAttrs) {

        // TODO: make sure it doesnt render on mobile
        if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
          return false;
        }

        return this.link;
      }
    };
  });
