"use strict";
app.controller("DecentAgencyController", ["$scope", "DecentAgencyFactory", function($scope, DecentAgencyFactory) {
  var init = function () {
      $scope.title = {msg: 'Decent Agency HomePage'};
      $scope.dictionary = {
        Decent: "Of an acceptable standard; satisfactory; abbr. for Decentral(ize)(d)",
        Agency: "The ability to transform energy that arises from a combination of chioce and action; The ability to interact with and affect a system and/or its components; A collection of individuals with such capacity to affect change in a system.",
        Mentor: "An experienced and trusted advisor.",
        Employee: "A person given work and paid for it, especially at a non-executive level.",
        Contribute: "To give in order to help achieve or provide something; help to cause or bring about; supply for publication.",
        Ethics: "moral principles that govern a person's behavior or the conducting of an activity."
      };
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
