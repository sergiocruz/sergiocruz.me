(function() {

  'use strict';

  /**
   * @ngdoc directive
   * @name ngApp.directive:rating
   * @description
   * # rating
   */
  angular.module('ngApp')
    .directive('rating', rating);

  /**
   * Directive definition
   * @return {Directive}
   */
  function rating() {

    function postLink(scope, element) {

      // Creates progress bar
      var progressbar = angular.element('<div></div>');
      progressbar.addClass('progress-bar progress-bar-success');
      progressbar = angular.element(progressbar);
      progressbar.width(scope.rating + '%');

      // Appends progress bar
      element.addClass('progress');
      element.html(progressbar);
    }

    return {
      template: '<span></span>',
      restrict: 'A',
      scope: {
        rating: '@'
      },
      link: postLink
    };
  }

})();
