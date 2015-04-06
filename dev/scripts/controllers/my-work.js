app.controller('my-work', ['$scope', '$http', function($scope, $http) {
  //autocomplete
  $scope.autocomplete= [];

  $http.get('dist/models/data.json').success(function(data) {
    $scope.projects = data;
    $scope.searchOrder = 'rating';
    $scope.direction='reverse';

    //Generate autocomplete array
    var projectNameArr=[],catArr=[],techArr=[];
    for (var i = 0; i < data.length; i++) { 
      projectNameArr.push(data[i].name);
      catArr=catArr.concat(data[i].cat.split(", "));
      techArr=techArr.concat(data[i].technologies.split(", ")); //split each tech word first, then concat
    }
    
    // What we want is a stat array, so instead ['Web', 'Web','Mobile'], we will have ['Web (2)','Mobile (1)']
    catArr=makeStatsArr(catArr);
    techArr=makeStatsArr(techArr);

    $scope.autocomplete=projectNameArr.concat(catArr,techArr);

  	$scope.flip=function($event){
  		$($event.currentTarget).toggleClass("flipped");
  	}

    //On select a string/item on the autocomplete list
    $scope.selectItem=function(item){
      if(item[item.length-1]==")"){
          $scope.query = item.slice(0,item.indexOf("(")-1);
      }
    }
  });

  var makeStatsArr=function(originArr){
      var statsArr=[];
      //make a stats obj
      var statsObj = originArr.reduce(function (acc, curr) { 
        if (typeof acc[curr] == 'undefined') {
          acc[curr] = 1;
        } else {
          acc[curr] += 1;
        }
        return acc;
      },{});
      //make a stats array
      for (var key in statsObj) {
        if (statsObj.hasOwnProperty(key)) {
          statsArr.push(key+" ("+statsObj[key]+")");
        }
      }
      return statsArr;
  }

  $('#back-to-top').hide();
  //Animation while scrolling
  $(window).scroll(function() {
    if ($(this).scrollTop()>1000){
        $('#back-to-top').fadeIn();
    }else{     
       $('#back-to-top').fadeOut();
    }
  });
  $("#back-to-top").click(function() {
    console.log('click to top');
      $('html,body').scrollTop(0);
  });

}]);