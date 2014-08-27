'use strict';

/**
 * @ngdoc directive
 * @name ngApp.directive:scrollTo
 * @description
 * # scrollTo
 */
angular.module('ngApp')
  .directive('scrollTo', function scrollTo() {

    /**
     * Scrolls to target
     * @param {String} The css selector
     * @return {Void}
     */
    function scroll(selector) {

      // Tries to locate target
      var $target = $(selector);

      if (!$target.length) {
        return;
      }


      $('html, body').animate({
        scrollTop: $target.offset().top - 20
      }, 400);
    }

    /**
     * Linking function
     * @param  scope
     * @param  element
     */
    function link(scope, element) {

      // Scroll on click
      element.on('click', function() {
        scroll(scope.targetEl);
      });
    }

    return {
      scope: {
        targetEl: '@scrollToTarget'
      },
      restrict: 'EA',
      link: link
    };
  });
