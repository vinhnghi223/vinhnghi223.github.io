'use strict';

/**
 * @ngdoc function
 * @name vinhnghigithubioApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the vinhnghigithubioApp
 */
angular.module('vinhnghigithubioApp')
  .controller('MainCtrl', ['$scope', '$http', function($scope, $http) {
  $http.get('models/data.json').success(function(data) {
    $scope.projects = data;
    $scope.searchOrder = 'rating';
    $scope.direction='reverse';
	$scope.flip=function($event){
		$($event.currentTarget).toggleClass("flipped");
	}
  });
}]);
