(function() {
  'use strict';

  /**
   * @ngdoc overview
   * @name ngApp
   * @description
   * # ngApp
   *
   * Main module of the application.
   */
  angular
    .module('ngApp', [
      'ngAnimate',
      'ngCookies',
      'ngResource',
      'ngRoute',
      'ngSanitize',
      'ngTouch',
      'duParallax'
    ])
    // .config(function ($routeProvider) {
    //   $routeProvider
    //     .when('/', {
    //       templateUrl: 'views/main.html',
    //       controller: 'MainCtrl'
    //     })
    //     .when('/about', {
    //       templateUrl: 'views/about.html',
    //       controller: 'AboutCtrl'
    //     })
    //     .otherwise({
    //       redirectTo: '/'
    //     });
    // })
    ;

})();
