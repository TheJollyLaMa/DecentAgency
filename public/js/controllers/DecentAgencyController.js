"use strict";
app.controller("DecentAgencyController", ["$scope", "DecentAgencyFactory", function($scope, DecentAgencyFactory) {
  var init = function () {
      $scope.title = 'Decent Agency HomePage';
      $scope.about = {msg: "A Decent Agency By Deed."};
      $scope.fetchDecentAgencyData = async () => {
        await DecentAgencyFactory.FetchDecentAgencyData().then((res)=>{
          console.log(res);
          $scope.DAdata = res.data;
          $scope.lbs_expected = 0;
          $scope.lbs_stored = 0;
        })
      };
    
      $scope.fetchDecentAgencyData();
  }

  init();
}]);
