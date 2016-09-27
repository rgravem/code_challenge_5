myApp.controller("viewController", ["$scope", "$http", "$route", function($scope, $http, $route){
  console.log("viewController hit");
  // call to update view page
  $http({
    method:'GET',
    url:'/all',
  }).then(function(response){
  var array = response.data;
  console.log('this is the array:', array);
  $scope.dataToDom = array;
});// data from db to display on dom
// delete button on click
  $scope.removeHero = function(){
    var objectToSend = { id: this.x._id };
    console.log(objectToSend);
// start of delete call, had to use headers so DELETE route could get a body
    $http({
      method:'DELETE',
      url: '/removeHero',
      data: objectToSend,
      headers: {'Content-Type': 'application/json;charset=utf-8'}
    }).then(function(response){
      console.log('got this back on delete:', response);
    }); // end response

    location.reload();
  };// end remove hero
}]);// end controller
