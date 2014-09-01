/**
 * @ngdoc function
 * @name ngApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngApp
 */
(function() {

  'use strict';

  angular.module('ngApp')
    .controller('MainCtrl', ['$scope', 'parallaxHelper', MainCtrl]);


  function MainCtrl($scope, parallaxHelper) {
    this.background = parallaxHelper.createAnimator(-0.3, 150, -150);
  }

})();
