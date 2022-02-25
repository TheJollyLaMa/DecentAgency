"use strict";
app.controller("DecentMentorController", ["$scope", "DecentMentorFactory", function($scope, DecentMentorFactory) {
  var init = function () {
      $scope.title = 'Decent Mentor HomePage';
      $scope.about = {msg: "A Decent Mentor About."};
      $scope.FetchDecentMentorData = async () => {
        await DecentMentorFactory.FetchDecentMentorData().then((res)=>{
          console.log(res);
          $scope.mentorMetaData = res;
        });
      };
      $scope.toon_head = 'http://bafybeidyq6pmt7geavy52rfmo6xmfxyxw6eaflyj3goe7y2i7zbip5e6me.ipfs.localhost:8080/toon_head.png';
    
      $scope.FetchDecentMentorData();
  }

  init();
}]);
