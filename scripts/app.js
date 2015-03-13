'use strict';

/**
 * @ngdoc overview
 * @name vinhnghigithubioApp
 * @description
 * # vinhnghigithubioApp
 *
 * Main module of the application.
 */
angular
  .module('vinhnghigithubioApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngTouch',
    'ui.sortable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
