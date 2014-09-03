var myApp = angular.module('myApp', ['ngAnimate']);

myApp.controller('MyController', ['$scope', '$http', function($scope, $http) {
  $http.get('js/data.json').success(function(data) {
    $scope.projects = data;
    $scope.searchOrder = 'rating';
    $scope.direction='reverse';
  });
}]);

