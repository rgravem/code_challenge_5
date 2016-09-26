myApp.controller("addHeroController", ["$scope", "$http", function( $scope, $http ){
  console.log("addHeroController hit");
  // on click for add pet button
  $scope.addHero = function(){
    console.log('in addHero:', $scope.nameIn);
    //object to sent to db
    var newHero = {
      alias: $scope.aliasIn,
      first_name: $scope.first_nameIn,
      last_name: $scope.last_nameIn,
      city: $scope.cityIn,
      power_name: $scope.power_nameIn
    }; // end new hero
    console.log(newHero);
    //post call to add hero
    $http({
      method: 'POST',
      url: '/addHero',
      data: newHero
    }).then(function( response ){
      console.log( response);
    }); // end response
  }; // end addHero
}]); // end controller
