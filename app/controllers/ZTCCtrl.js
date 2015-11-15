app.controller("ZTCCtrl", 
  ["$scope", "$http",
  function($scope, $http) {
    $scope.country = "US";
    $scope.input = "";

    // runAjax();

    $scope.getLocation = function(){
      console.log($scope.country);
      // $http.get("http://api.zippopotam.us/us/ks/spring hill/18950")
      $http.get("http://api.zippopotam.us/" + $scope.country + "/" + $scope.input)
      .then(function(data){
        console.log(data);
        var obj = {
          country: data.data.country,
          zipCode: data.data['post code']
        };
        console.log(obj);
      });
    };
  }
]);