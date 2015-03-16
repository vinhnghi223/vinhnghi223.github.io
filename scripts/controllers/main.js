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

    //flip on click
	(function() {
		setTimeout(function () {
		  var cards = $(".card.effect__click");
		  for ( var i  = 0, len = cards.length; i < len; i++ ) {
		    var card = cards[i];
		    clickListener(card);
		  }

		  function clickListener(card) {
		    card.addEventListener( "click", function() {
		      $(this).toggleClass("flipped");
		    });
		  }
		},200);//wait 200 ms so the page is completely rendered
	})();

  });
}]);
