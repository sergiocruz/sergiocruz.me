'use strict';

/**
 * @ngdoc directive
 * @name ngApp.directive:video
 * @description
 * # video
 */
angular.module('ngApp')
  .directive('scVideo', function scVideo(BrowserChecker) {
    return {
      scope: {
        src: '@'
      },
      restrict: 'A',
      replace: true,
      templateUrl: '/views/directives/scvideo.html',
      link: function link() {},
      compile: function compile() {

        // Does not compile if is mobile
        if (BrowserChecker.isMobile()) {
          this.templateUrl = '';
        }

        // Return linkining method
        return this.link;
      }
    };
  });
