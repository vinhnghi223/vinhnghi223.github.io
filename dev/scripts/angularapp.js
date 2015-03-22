'use strict';

// -------------------------------- angular.js --------------------------------
angular
  .module('vinhnghigithubioApp', [
    'ngAnimate',
    'ngResource',
    'ngRoute',
    'autocomplete'
  ]).config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'dist/views/about-me.html'
    })
    .when('/about-me', {
      templateUrl: 'dist/views/about-me.html'
    })
    .when('/my-work', {
      templateUrl: 'dist/views/my-work.html',
      controller: 'my-work'
    })
    .otherwise({
      redirectTo: '/'
    });
});
