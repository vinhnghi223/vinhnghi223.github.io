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
        templateUrl: 'dist/views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

//'use strict';

/**
 * @ngdoc function
 * @name vinhnghigithubioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vinhnghigithubioApp
 */
angular.module('vinhnghigithubioApp')
  .controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('dist/models/data.json').success(function(data) {
    $scope.projects = data;
    $scope.searchOrder = 'rating';
    $scope.direction='reverse';
	$scope.flip=function($event){
		$($event.currentTarget).toggleClass("flipped");
	}
  });
}]);
