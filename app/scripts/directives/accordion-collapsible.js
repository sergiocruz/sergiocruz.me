(function() {

  'use strict';

  /**
   * @ngdoc directive
   * @name ngApp.directive:accordionCollapsible
   * @description
   * # accordionCollapsible
   */
  angular.module('ngApp')
    .directive('accordionCollapsible', function accordionCollapsible() {

      // Directive controller
      function controller($scope) {

        // Public API
        this.toggleShow = toggleShow;

        /**
         * Shows content of directive
         * @return {Void}
         */
        function toggleShow() {
          $scope.show = !$scope.show;
        }
      }

      // Diretive linking function
      function postLink(scope) {
        scope.show = !!scope.show;
      }

      return {
        templateUrl: 'views/directives/accordion-collapsible.html',
        restrict: 'EA',
        transclude: true,
        scope: {
          title: '@',
          show: '@'
        },
        controller: ['$scope', controller],
        controllerAs: 'accordion',
        link: postLink
      };
    });

})();
